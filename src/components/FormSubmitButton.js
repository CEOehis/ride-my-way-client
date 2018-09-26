import React from 'react';
import PropTypes from 'prop-types';

const FormSubmitButton = ({ submitting }) => (submitting
  ? <input className="btn btn-lg btn-submit btn-orange submitting" type="submit" value="submitting" disabled />
  : <input className="btn btn-lg btn-submit btn-orange" type="submit" value="submit" />);


FormSubmitButton.propTypes = {
  submitting: PropTypes.bool.isRequired,
};

export default FormSubmitButton;
