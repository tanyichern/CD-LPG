import React, { Fragment } from 'react';
import _ from 'lodash';
import { FormGroup, Label, Input } from 'reactstrap';

const InputDropdown = (props) => {
  return (
    <Fragment>
      <FormGroup>
        <Label for={props.field}>{props.text}</Label>
        <Input
          type="select"
          name={props.field}
          id={props.field}
          onChange={props.onChange}
        >
          <option></option>
          {_.map(props.dropdown, (item) => {
            return <option key={item}>{item}</option>;
          })}
        </Input>
      </FormGroup>
    </Fragment>
  );
};

export default InputDropdown;
