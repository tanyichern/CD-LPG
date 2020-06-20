import React, { Fragment } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const AuthName = (props) => {
  return (
    <Fragment>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          onChange={props.onChange}
        ></Input>
      </FormGroup>
    </Fragment>
  );
};

export default AuthName;
