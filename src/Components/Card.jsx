// components/Card.jsx
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ id, image, title, children, linkPrefix }) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden flex flex-col h-full">
      <Link to={`/${linkPrefix}/${id}`}>
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      </Link>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-lg font-bold mb-2">
          <Link
            to={`/${linkPrefix}/${id}`}
            className="text-gray-600 hover:text-green-700"
          >
            {title}
          </Link>
        </h3>
        <div className="mt-auto">{children}</div>
      </div>
    </div>
  );
};
Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  linkPrefix: PropTypes.string.isRequired,
};

export default Card;
