import PropTypes from "prop-types";
const StatCard = ({ icon: Icon, title, value, color }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow flex items-center space-x-4">
      <Icon className={`text-${color}-500`} />
      <div>
        <h4 className="text-xl font-semibold">{title}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
};
// prop validations
StatCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string.isRequired,
};

export default StatCard;
