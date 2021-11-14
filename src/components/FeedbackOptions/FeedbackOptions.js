import PropTypes from 'prop-types';

import './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(({ id, name }) => (
        <button key={id} onClick={() => onLeaveFeedback(name)} name={name}>
          {name}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onLeaveFeedback: PropTypes.func,
};
