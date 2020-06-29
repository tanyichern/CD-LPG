import React, { Fragment } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const InputText = (props) => {
  return (
    <Fragment>
      <FormGroup>
        <Label for={props.field}>{props.text}</Label>
        <Input
          type="text"
          name={props.field}
          id={props.field}
          onChange={props.onChange}
          disabled={props.disabled}
          value={props.value}
          placeholder={props.placeholder}
        ></Input>
      </FormGroup>
    </Fragment>
  );
};

export default InputText;
