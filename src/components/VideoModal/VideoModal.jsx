import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';

const VideoModal = ({ video }) => {
  return (
    <dialog id="video_details" className="modal">
      <div className="modal-box">
        {video && (
          <div>
            <div className="card bg-base-100 image-full shadow-sm">
              <figure>
                <img src={video.thumbnail} alt={video.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{video.title}</h2>
                <p>{video.description}</p>
              </div>
            </div>

            <div className="flex gap-3 items-center mt-4">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                  <img src={video.authors[0].profile_picture} alt={video.authors[0].profile_name} />
                </div>
              </div>
              <div>
                <p className="font-semibold flex gap-1 items-center">
                  {video.authors[0].profile_name}
                  {video.authors[0].verified === true && <FaCheckCircle className="text-blue-500"></FaCheckCircle>}
                </p>
                <p className="text-sm text-gray-400">{video.others.views} views</p>
              </div>
            </div>
          </div>
        )}

        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

VideoModal.propTypes = {
  video: PropTypes.object,
};

export default VideoModal;
