import PropTypes from "prop-types";

const colorClasses = {
  green: "border-green-500 text-green-500",
  red: "border-red-500 text-red-500",
  yellow: "border-yellow-500 text-yellow-500",
  orange: "border-orange-500 text-orange-500",
  purple: "border-purple-500 text-purple-500",
};

const StatCard = ({ icon: Icon, title, value, color }) => {
  const classes = colorClasses[color] || colorClasses.green;
  return (
    <div className={`bg-white shadow-lg p-4 rounded-lg border-l-4 ${classes}`}>
      <div className="flex items-center">
        <Icon className={`h-8 w-8 ${classes}`} />
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
