import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Form = ({ onSubmit, isDisabled, contentValue, setContentValue }) =>
  <div>
    <form onSubmit={onSubmit}>
      <TextField
        name="content"
        value={contentValue}
        onChange={(_, value) => setContentValue(value)}
      />
      <RaisedButton
        label="Send"
        type="submit"
        primary={true}
        disabled={isDisabled}
      />
    </form>
  </div>;

export default Form;