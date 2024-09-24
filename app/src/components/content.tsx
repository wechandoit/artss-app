import PropTypes from "prop-types";
import Patients from "./patients";

const Content = () => {
  return (
    <div>
      <Patients />
    </div>
  );
};

Content.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Content;
