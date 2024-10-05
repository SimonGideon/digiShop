import PropTypes from "prop-types";
const StatCard = ({ icon: Icon, title, value, color }) => {
  return (
    <div
      className={`bg-white shadow-lg p-4 rounded-lg border-l-4 border-${color}-500`}
    >
      <div className="flex items-center">
        <Icon className={`text-${color}-500 h-8 w-8`} />
        <div className="ml-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-xl">{value}</p>
        </div>
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
