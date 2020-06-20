import React, { Fragment } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const AuthRank = (props) => {
  return (
    <Fragment>
      <FormGroup>
        <Label for="rank">Rank</Label>
        <Input
          type="text"
          name="rank"
          id="rank"
          onChange={props.onChange}
        ></Input>
      </FormGroup>
    </Fragment>
  );
};

export default AuthRank;
