import React, { Fragment } from 'react';
import {
  Col,
  Row,
  Button,
  ButtonGroup,
  FormGroup,
  Label,
  Input,
  InputGroup,
} from 'reactstrap';

const FormRowTwoDynamicFields = (props) => {
  const { name, title, fieldx, fieldy, inputList, setInputList } = props;

  const onChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const onRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const onAddClick = () => {
    setInputList([...inputList, { [fieldx.name]: '', [fieldy.name]: '' }]);
  };

  return (
    <Fragment>
      <Row form>
        <Col md={11}>
          <h5>{title}</h5>
        </Col>
        {inputList.length === 0 ? (
          <Col md={1}>
            <InputGroup>
              <ButtonGroup>
                <Button
                  outline
                  color="success"
                  onClick={() => onAddClick()}
                  style={{
                    marginLeft: '2.1rem',
                  }}
                >
                  +
                </Button>
              </ButtonGroup>
            </InputGroup>
          </Col>
        ) : null}
      </Row>
      {inputList.map((row, index) => {
        return (
          <Row form key={index}>
            <Col md={fieldx.md}>
              <FormGroup>
                {index === 0 ? (
                  <Label for={fieldx.name}>{fieldx.title}</Label>
                ) : null}
                <InputGroup>
                  <Input
                    type={fieldx.type}
                    name={fieldx.name}
                    id={`${name}${fieldx.title}${index}`}
                    placeholder=""
                    value={row[fieldx.name]}
                    onChange={(e) => onChange(e, index)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={fieldy.md}>
              <FormGroup>
                {index === 0 ? (
                  <Label for={fieldy.name}>{fieldy.title}</Label>
                ) : null}
                <InputGroup>
                  <Input
                    type={fieldy.type}
                    name={fieldy.name}
                    id={`${name}${fieldy.title}${index}`}
                    placeholder=""
                    value={row[fieldy.name]}
                    onChange={(e) => onChange(e, index)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={1}>
              <FormGroup>
                {index === 0 ? (
                  <Label for="trainingType">
                    <span>&nbsp;&nbsp;</span>
                  </Label>
                ) : null}
                <InputGroup>
                  <ButtonGroup>
                    <Button
                      outline
                      color="danger"
                      style={{
                        marginRight: '0.2rem',
                      }}
                      onClick={() => onRemoveClick(index)}
                    >
                      -
                    </Button>
                    <Button
                      outline
                      color="success"
                      onClick={() => onAddClick()}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
        );
      })}
    </Fragment>
  );
};

export default FormRowTwoDynamicFields;
