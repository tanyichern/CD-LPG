import React, { Component, useState } from 'react';
import { connect } from 'react-redux';

import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from 'reactstrap';
import { createLesson } from '../../actions/lessonActions';
import { RETURN_FAIL } from '../../actions/types';

import FormRowTwoDynamicFields from '../forms/FormRowDynamicFields';

const AdminLessonCreateForm = (props) => {
  const [conduct, setConduct] = useState('');
  const [trainingType, setTrainingType] = useState('');

  const [mrcCourse, setMrcCourse] = useState('');
  const [mrcUnit, setMrcUnit] = useState('');
  const [mrcCO, setMrcCO] = useState('');

  const [tsr, setTsr] = useState([{ name: '', link: '' }]);
  const [trainDirectives, setTrainDirectives] = useState([
    {
      name: '',
      link: '',
    },
  ]);
  const [medDirectives, setMedDirectives] = useState([{ name: '', link: '' }]);
  const [opsInstrs, setOpsInstrs] = useState([{ name: '', link: '' }]);
  const [vehicIndents, setVehicIndents] = useState([
    {
      name: '',
      quantity: '',
    },
  ]);
  const [ammo, setAmmo] = useState([{ name: '', quantity: '' }]);

  const onSubmit = (e) => {
    e.preventDefault();

    // create lesson object
    const newLesson = {
      generation: 'parent',
      trainingType,
      conduct,
      regulations: {
        tsr,
        trainDirectives,
        medDirectives,
        opsInstrs,
      },
      logistics: {
        vehicIndents,
        ammo,
      },
      mostRecent: {
        course: mrcCourse,
        unit: mrcUnit,
        conductingOfficer: mrcCO,
      },
      children: [],
      defaultFiles: [],
      owner: {
        _id: props.auth.user ? props.auth.user._id : null,
        rank: props.auth.user ? props.auth.user.rank : null,
        name: props.auth.user ? props.auth.user.name : null,
        unit: props.auth.user ? props.auth.user.unit : null,
      },
    };

    // attempt to register
    props.createLesson(newLesson);
  };

  return (
    <Form onSubmit={onSubmit}>
      {props.error.msg.msg ? (
        <Alert color="danger">{props.error.msg.msg}</Alert>
      ) : null}
      <h5>Owner</h5>

      <Row form>
        <Col md={2}>
          <FormGroup disabled>
            <Label for="rank">Rank</Label>
            <Input
              type="text"
              name="ownerRank"
              id="ownerRank"
              disabled
              value={props.auth.user ? props.auth.user.rank : ''}
            />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup disabled>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="ownerName"
              id="ownerName"
              disabled
              value={props.auth.user ? props.auth.user.name : ''}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup disabled>
            <Label for="unit">Unit</Label>
            <Input
              type="text"
              name="ownerUnit"
              id="ownerUnit"
              disabled
              value={props.auth.user ? props.auth.user.unit : ''}
            />
          </FormGroup>
        </Col>
      </Row>

      <hr />
      <h5>Title</h5>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="conduct">Conduct</Label>
            <Input
              type="text"
              name="conduct"
              id="conduct"
              placeholder=""
              onChange={(e) => setConduct(e.target.value)}
            />
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
              onChange={(e) => setTrainingType(e.target.value)}
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
        inputList={tsr}
        setInputList={(value) => setTsr(value)}
      />

      <hr />
      <h5>Training Directives</h5>
      <FormRowTwoDynamicFields
        fieldx={{ type: 'text', name: 'name', title: 'Name', md: 5 }}
        fieldy={{ type: 'text', name: 'link', title: 'Link', md: 6 }}
        title="trainDirectives"
        inputList={trainDirectives}
        setInputList={(value) => setTrainDirectives(value)}
      />

      <hr />
      <h5>Medical Directives</h5>
      <FormRowTwoDynamicFields
        fieldx={{ type: 'text', name: 'name', title: 'Name', md: 5 }}
        fieldy={{ type: 'text', name: 'link', title: 'Link', md: 6 }}
        title="medDirectives"
        inputList={medDirectives}
        setInputList={(value) => setMedDirectives(value)}
      />

      <hr />
      <h5>Ops Instructions</h5>
      <FormRowTwoDynamicFields
        fieldx={{ type: 'text', name: 'name', title: 'Name', md: 5 }}
        fieldy={{ type: 'text', name: 'link', title: 'Link', md: 6 }}
        title="opsInstrs"
        inputList={opsInstrs}
        setInputList={(value) => setOpsInstrs(value)}
      />

      <hr />
      <h5>Vehicle Indents</h5>
      <FormRowTwoDynamicFields
        fieldx={{ type: 'text', name: 'name', title: 'Name', md: 10 }}
        fieldy={{
          type: 'number',
          name: 'quantity',
          title: 'Quantity',
          md: 1,
        }}
        title="vehicIndents"
        inputList={vehicIndents}
        setInputList={(value) => setVehicIndents(value)}
      />

      <hr />
      <h5>Ammo</h5>
      <FormRowTwoDynamicFields
        fieldx={{ type: 'text', name: 'name', title: 'Name', md: 10 }}
        fieldy={{
          type: 'number',
          name: 'quantity',
          title: 'Quantity',
          md: 1,
        }}
        title="ammo"
        inputList={ammo}
        setInputList={(value) => setAmmo(value)}
      />

      <hr />
      <h5>Most Recent Conduct</h5>
      <Row form>
        <Col md={2}>
          <FormGroup>
            <Label for="course">Course</Label>
            <Input
              type="text"
              name="mrcCourse"
              id="mrcCourse"
              onChange={(e) => setMrcCourse(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="conductingOfficer">Conducting Officer</Label>
            <Input
              type="text"
              name="mrcCO"
              id="mrcCO"
              onChange={(e) => setMrcCO(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="unit">Unit</Label>
            <Input
              type="text"
              name="mrcUnit"
              id="mrcUnit"
              onChange={(e) => setMrcUnit(e.target.value)}
            />
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error,
});

export default connect(mapStateToProps, { createLesson })(
  AdminLessonCreateForm
);
