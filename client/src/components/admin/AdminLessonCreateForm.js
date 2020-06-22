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

const AdminLessonCreateForm = (props) => {
  return (
    <Form>
      <h5>Owner</h5>
      <Row form>
        <Col md={2}>
          <FormGroup>
            <Label for="rank">Rank</Label>
            <Input type="text" name="rank" id="rank" />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="unit">Unit</Label>
            <Input type="text" name="unit" id="unit" />
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
      <Row form>
        <Col md={5}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="link">Link</Label>
            <InputGroup>
              <Input type="text" name="link" id="link" placeholder="" />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col md={1}>
          <FormGroup>
            <Label for="trainingType">
              <span>&nbsp;&nbsp;</span>
            </Label>
            <InputGroup>
              <ButtonGroup>
                <Button
                  outline
                  color="danger"
                  style={{
                    marginRight: '0.2rem',
                  }}
                >
                  -
                </Button>
                <Button outline color="success">
                  +
                </Button>
              </ButtonGroup>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>

      <hr />
      <h5>Training Directives</h5>
      <Row form>
        <Col md={5}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="link">Link</Label>
            <InputGroup>
              <Input type="text" name="link" id="link" placeholder="" />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col md={1}>
          <FormGroup>
            <Label for="trainingType">
              <span>&nbsp;&nbsp;</span>
            </Label>
            <InputGroup>
              <ButtonGroup>
                <Button
                  outline
                  color="danger"
                  style={{
                    marginRight: '0.2rem',
                  }}
                >
                  -
                </Button>
                <Button outline color="success">
                  +
                </Button>
              </ButtonGroup>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>

      <hr />
      <h5>Medical Directives</h5>
      <Row form>
        <Col md={5}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="link">Link</Label>
            <InputGroup>
              <Input type="text" name="link" id="link" placeholder="" />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col md={1}>
          <FormGroup>
            <Label for="trainingType">
              <span>&nbsp;&nbsp;</span>
            </Label>
            <InputGroup>
              <ButtonGroup>
                <Button
                  outline
                  color="danger"
                  style={{
                    marginRight: '0.2rem',
                  }}
                >
                  -
                </Button>
                <Button outline color="success">
                  +
                </Button>
              </ButtonGroup>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>

      <hr />
      <h5>Ops Instructions</h5>
      <Row form>
        <Col md={5}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="link">Link</Label>
            <InputGroup>
              <Input type="text" name="link" id="link" placeholder="" />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col md={1}>
          <FormGroup>
            <Label for="trainingType">
              <span>&nbsp;&nbsp;</span>
            </Label>
            <InputGroup>
              <ButtonGroup>
                <Button
                  outline
                  color="danger"
                  style={{
                    marginRight: '0.2rem',
                  }}
                >
                  -
                </Button>
                <Button outline color="success">
                  +
                </Button>
              </ButtonGroup>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>

      <hr />
      <h5>Vehicle Indents</h5>
      <Row form>
        <Col md={10}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="" />
          </FormGroup>
        </Col>
        <Col md={1}>
          <FormGroup>
            <Label for="quantity">Quantity</Label>
            <InputGroup>
              <Input
                type="number"
                name="quantity"
                id="quantity"
                placeholder=""
              />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col md={1}>
          <FormGroup>
            <Label for="trainingType">
              <span>&nbsp;&nbsp;</span>
            </Label>
            <InputGroup>
              <ButtonGroup>
                <Button
                  outline
                  color="danger"
                  style={{
                    marginRight: '0.2rem',
                  }}
                >
                  -
                </Button>
                <Button outline color="success">
                  +
                </Button>
              </ButtonGroup>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>

      <hr />
      <h5>Ammo</h5>
      <Row form>
        <Col md={10}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="" />
          </FormGroup>
        </Col>
        <Col md={1}>
          <FormGroup>
            <Label for="quantity">Quantity</Label>
            <InputGroup>
              <Input
                type="number"
                name="quantity"
                id="quantity"
                placeholder=""
              />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col md={1}>
          <FormGroup>
            <Label for="trainingType">
              <span>&nbsp;&nbsp;</span>
            </Label>
            <InputGroup>
              <ButtonGroup>
                <Button
                  outline
                  color="danger"
                  style={{
                    marginRight: '0.2rem',
                  }}
                >
                  -
                </Button>
                <Button outline color="success">
                  +
                </Button>
              </ButtonGroup>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>

      <hr />
      <h5>Most Recent Conduct</h5>
      <Row form>
        <Col md={2}>
          <FormGroup>
            <Label for="course">Course</Label>
            <Input type="text" name="course" id="course" />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="conductingOfficer">Conducting Officer</Label>
            <Input
              type="text"
              name="conductingOfficer"
              id="conductingOfficer"
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="unit">Unit</Label>
            <Input type="text" name="unit" id="unit" />
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
