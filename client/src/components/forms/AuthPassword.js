import React, { Fragment } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const AuthPassword = (props) => {
  return (
    <Fragment>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          onChange={props.onChange}
        ></Input>
      </FormGroup>
    </Fragment>
  );
};

export default AuthPassword;
