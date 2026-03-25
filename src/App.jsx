import { useEffect, useState } from 'react';
import './App.css';
import Categories from './components/Categories/Categories';
import Navbar from './components/Navbar/Navbar';
import VideoModal from './components/VideoModal/VideoModal';
import Videos from './components/Videos/Videos';

function App() {
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
      .then(res => res.json())
      .then(data => setCategories(data.categories));
  };

  const loadVideos = (searchText = '') => {
    setLoading(true);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
      .then(res => res.json())
      .then(data => {
        setActiveCategory('all');
        setVideos(data.videos);
        setLoading(false);
      });
  };

  const loadCategoryVideos = id => {
    setLoading(true);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
      .then(res => res.json())
      .then(data => {
        setActiveCategory(id);
        setVideos(data.category);
        setLoading(false);
      });
  };

  const loadVideoDetails = videoId => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`)
      .then(res => res.json())
      .then(data => {
        setSelectedVideo(data.video);
        document.getElementById('video_details').showModal();
      });
  };

  const handleSortByView = () => {
    const toNumber = v => {
      if (!v) return 0;
      if (v.includes('K')) return parseFloat(v) * 1000;
      if (v.includes('M')) return parseFloat(v) * 1000000;
      return parseFloat(v);
    };
    const sorted = [...videos].sort((a, b) => toNumber(b.others.views) - toNumber(a.others.views));
    setVideos(sorted);
  };

  const handleSearch = text => {
    loadVideos(text);
  };

  useEffect(() => {
    loadCategories();
    loadVideos();
  }, []);

  return (
    <>
      <Navbar onSearch={handleSearch} onSortByView={handleSortByView}></Navbar>
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={loadCategoryVideos}
        onAllClick={() => loadVideos()}
      ></Categories>
      <Videos videos={videos} loading={loading} onShowDetails={loadVideoDetails}></Videos>
      <VideoModal video={selectedVideo}></VideoModal>
    </>
  );
}

export default App;
