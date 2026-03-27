import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';

const formatTime = postedDate => {
  const val = parseInt(postedDate);
  const secs = val > 1000000000 ? Math.floor(Date.now() / 1000) - val : val;
  const mins = Math.floor(secs / 60);
  const hrs = Math.floor(secs / 3600);
  const days = Math.floor(secs / 86400);
  const months = Math.floor(days / 30);

  if (months >= 12) return null;
  if (months >= 1) return `${months} month${months > 1 ? 's' : ''} ago`;
  if (days >= 1) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (hrs >= 1) return `${hrs}hrs ${Math.floor((secs % 3600) / 60)}min ago`;
  return `${mins} min ago`;
};

const VideoCard = ({ video, onShowDetails }) => {
  const { video_id, thumbnail, title, authors, others } = video;

  return (
    <div className="card bg-base-100 hover:shadow-md transition-shadow duration-200">
      <figure className="relative">
        <img className="w-full h-[150px] object-cover" src={thumbnail} alt={title} />
        {others.posted_date && (
          <span className="absolute bottom-2 right-2 text-sm rounded text-white bg-black px-2">
            {formatTime(others.posted_date)}
          </span>
        )}
      </figure>

      <div className="flex gap-3 px-0 py-5">
        <div className="profile">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
              <img src={authors[0].profile_picture} alt={authors[0].profile_name} />
            </div>
          </div>
        </div>

        <div className="intro">
          <h2 className="text-sm font-semibold">{title}</h2>
          <p className="text-sm text-gray-400 flex gap-1">
            {authors[0].profile_name}
            {authors[0].verified === true && <FaCheckCircle className="text-blue-500 w-5 h-5"></FaCheckCircle>}
          </p>
          <p className="text-sm text-gray-400">{others.views} views</p>
        </div>
      </div>

      <button onClick={() => onShowDetails(video_id)} className="btn btn-block">
        Show Details
      </button>
    </div>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
  onShowDetails: PropTypes.func,
};

export default VideoCard;
