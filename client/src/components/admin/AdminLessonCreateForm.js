import React from 'react';
import {
  Col,
  Row,
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
} from 'reactstrap';

import FormRowTwoDynamicFields from '../forms/FormRowDynamicFields';

const AdminLessonCreateForm = (props) => {
  return (
    <Form>
      <h5>Owner</h5>

      <Row form>
        <Col md={2}>
          <FormGroup>
            <Label for="rank">Rank</Label>
            <Input type="text" name="ownerRank" id="ownerRank" />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="ownerName" id="ownerName" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="unit">Unit</Label>
            <Input type="text" name="ownerUnit" id="ownerUnit" />
          </FormGroup>
        </Col>
      </Row>

      <hr />
      <h5>Title</h5>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="conduct">Conduct</Label>
            <Input type="text" name="conduct" id="conduct" placeholder="" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="trainingType">Training Type</Label>
            <Input
              type="text"
              name="trainingtype"
              id="trainingType"
              placeholder=""
            />
          </FormGroup>
        </Col>
      </Row>

      <hr />
      <h5>Training Safety Regulations</h5>
      <FormRowTwoDynamicFields
        fieldx={{ type: 'text', name: 'name', title: 'Name', md: 5 }}
        fieldy={{ type: 'text', name: 'link', title: 'Link', md: 6 }}
        title="tsr"
      />

      <hr />
      <h5>Training Directives</h5>
      <FormRowTwoDynamicFields
        fieldx={{ type: 'text', name: 'name', title: 'Name', md: 5 }}
        fieldy={{ type: 'text', name: 'link', title: 'Link', md: 6 }}
        title="trainDirectives"
      />

      <hr />
      <h5>Medical Directives</h5>
      <FormRowTwoDynamicFields
        fieldx={{ type: 'text', name: 'name', title: 'Name', md: 5 }}
        fieldy={{ type: 'text', name: 'link', title: 'Link', md: 6 }}
        title="medDirectives"
      />

      <hr />
      <h5>Ops Instructions</h5>
      <FormRowTwoDynamicFields
        fieldx={{ type: 'text', name: 'name', title: 'Name', md: 5 }}
        fieldy={{ type: 'text', name: 'link', title: 'Link', md: 6 }}
        title="opsInstrs"
      />

      <hr />
      <h5>Vehicle Indents</h5>
      <FormRowTwoDynamicFields
        fieldx={{ type: 'text', name: 'name', title: 'Name', md: 10 }}
        fieldy={{ type: 'number', name: 'quantity', title: 'Quantity', md: 1 }}
        title="vehicIndents"
      />

      <hr />
      <h5>Ammo</h5>
      <FormRowTwoDynamicFields
        fieldx={{ type: 'text', name: 'name', title: 'Name', md: 10 }}
        fieldy={{ type: 'number', name: 'quantity', title: 'Quantity', md: 1 }}
        title="ammo"
      />

      <hr />
      <h5>Most Recent Conduct</h5>
      <Row form>
        <Col md={2}>
          <FormGroup>
            <Label for="course">Course</Label>
            <Input type="text" name="mrcCourse" id="mrcCourse" />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="conductingOfficer">Conducting Officer</Label>
            <Input type="text" name="mrcCO" id="mrcCO" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="unit">Unit</Label>
            <Input type="text" name="mrcUnit" id="mrcUnit" />
          </FormGroup>
        </Col>
      </Row>
      <hr />

      <Button color="primary" className="float-right">
        Submit
      </Button>
    </Form>
  );
};

export default AdminLessonCreateForm;
