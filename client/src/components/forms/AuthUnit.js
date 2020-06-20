import React, { Fragment } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const AuthUnit = (props) => {
  return (
    <Fragment>
      <FormGroup>
        <Label for="unit">Unit</Label>
        <Input type="select" name="unit" id="unit" onChange={props.onChange}>
          <option></option>
          <option>Alpha Wing</option>
          <option>Bravo Wing</option>
          <option>Charlie Wing</option>
          <option>Delta Wing</option>
          <option>Echo Wing</option>
          <option>Foxtrot Wing</option>
          <option>Golf Wing</option>
          <option>Hotel Wing</option>
          <option>Air Wing</option>
          <option>MIDS Wing</option>
          <option>C4I Wing</option>
          <option>OCS HQ</option>
        </Input>
      </FormGroup>
    </Fragment>
  );
};

export default AuthUnit;
