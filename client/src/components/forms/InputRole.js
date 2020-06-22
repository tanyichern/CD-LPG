import React, { Fragment } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const InputRole = (props) => {
  return (
    <Fragment>
      <FormGroup>
        <Label for="role">Role</Label>
        <Input type="select" name="role" id="role" onChange={props.onChange}>
          <option></option>
          <option>Instructor</option>
          <option>Admin</option>
          <option>SME</option>
        </Input>
      </FormGroup>
    </Fragment>
  );
};

export default InputRole;
