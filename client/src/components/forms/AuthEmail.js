import React, { Fragment } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const AuthEmail = (props) => {
  return (
    <Fragment>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={props.onChange}
        ></Input>
      </FormGroup>
    </Fragment>
  );
};

export default AuthEmail;
