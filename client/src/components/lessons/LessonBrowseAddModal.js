import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLessonToCart } from '../../actions/lessonActions';

import InputText from '../forms/InputText';
import ModalForm from '../forms/ModalForm';
import { FiPlusSquare } from 'react-icons/fi';

const LessonBrowseAddModal = (props) => {
  const [inputCourse, setInputCourse] = useState('');
  const [inputUnit, setInputUnit] = useState('');
  const [inputName, setInputName] = useState('');

  const { id } = props;
  useEffect(() => {
    if (props.auth) {
      setInputUnit(props.auth.user.unit);
      setInputName(props.auth.user.name);
    }
  }, [props.auth]);

  const validate = () => {
    // TODO (?): regex to validate course eg. 120/20 OCC
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formValues = {
      id: id,
      owner: {
        _id: props.auth.user ? props.auth.user._id : null,
        rank: props.auth.user ? props.auth.user.rank : null,
        name: inputName,
        unit: inputUnit,
      },
      meta: {
        course: inputCourse,
        conductingOfficer: inputName,
      },
    };

    // attempt to add lesson
    props.addLessonToCart(formValues);
  };

  const resetState = () => {
    setInputCourse('');
    setInputUnit('');
    setInputName('');
  };

  const renderTrigger = () => {
    return (
      <FiPlusSquare
        className="float-right"
        size="1.25em"
        style={{ marginTop: '0.25rem', cursor: 'pointer' }}
      ></FiPlusSquare>
    );
  };

  const renderFields = () => {
    return (
      <Fragment>
        <InputText
          field="inputCourse"
          text="Course"
          onChange={(e) => setInputCourse(e.target.value)}
          placeholder="E.g. 120/20 OCC"
        />
        <InputText
          field="inputUnit"
          text="Wing"
          onChange={(e) => setInputUnit(e.target.value)}
          disabled={true}
          value={inputUnit}
        />
        <InputText
          field="inputName"
          text="Conducting Officer"
          onChange={(e) => setInputUnit(e.target.value)}
          disabled={true}
          value={inputName}
        />
      </Fragment>
    );
  };

  return (
    <ModalForm
      renderTrigger={renderTrigger}
      modalTitle="Add lesson"
      renderFields={renderFields}
      clientValid={validate()}
      primaryAction="Submit"
      secondaryAction="Cancel"
      handleSubmit={onSubmit}
      resetState={resetState}
      pushHistoryOnClose="/lessons"
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error,
});

export default connect(mapStateToProps, { addLessonToCart })(
  LessonBrowseAddModal
);
