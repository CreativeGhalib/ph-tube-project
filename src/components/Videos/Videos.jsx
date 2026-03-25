import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import NoContent from '../NoContent/NoContent';
import VideoCard from '../VideoCard/VideoCard';

const Videos = ({ videos, loading, onShowDetails }) => {
  if (loading) {
    return <Loader></Loader>;
  }

  if (videos.length === 0) {
    return <NoContent></NoContent>;
  }

  return (
    <section className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-28">
      {videos.map(video => (
        <VideoCard key={video.video_id} video={video} onShowDetails={onShowDetails}></VideoCard>
      ))}
    </section>
  );
};

Videos.propTypes = {
  videos: PropTypes.array,
  loading: PropTypes.bool,
  onShowDetails: PropTypes.func,
};

export default Videos;
