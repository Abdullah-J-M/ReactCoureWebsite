import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  // make a wrapper class to display the errors if we have any as per condition
  let wrapperClass = 'form-group';
  if (props.error.length > 0) {
    wrapperClass += 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          onChange={props.onChange}
          name={props.name}
          className="form-control"
          value={props.value}
        />
      </div>
      {/*for validation errors*/}
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  error: '',
};

export default TextInput;
