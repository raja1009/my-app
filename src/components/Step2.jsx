import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, updateForm } from '../actions/formActions';
import { TextField, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import '../../src/assets/css/bootstrap.min.css';
import '../../src/assets/css/responsive.css';
import '../../src/assets/css/app.min.css';
const Step2 = () => {
  const dispatch = useDispatch();
  const navigateTo=useNavigate()

  const { firstName, lastName, email,password, address } = useSelector((state) => state.form.data);

  const handleNext = () => {
    if (firstName && lastName && email && address) {
      //dispatch(nextStep());
      navigateTo('/step3')
    }
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
          <div className="card card_shadow">
            <div className="card-body card-body-adjustment">
      <h2>Step 2: Personal Information</h2>
      <TextField
        label="First Name"
        value={firstName}
        onChange={(e) => dispatch(updateForm('firstName', e.target.value))}
      />
      <TextField
        label="Last Name"
        value={lastName}
        onChange={(e) => dispatch(updateForm('lastName', e.target.value))}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => dispatch(updateForm('email', e.target.value))}
      />
       <TextField
        label="password"
        value={password}
        onChange={(e) => dispatch(updateForm('password', e.target.value))}
      />
      <TextField
        label="Address"
        value={address}
        onChange={(e) => dispatch(updateForm('address', e.target.value))}
      />
      <Button onClick={handleNext} disabled={!firstName || !lastName || !email || !address}>
        Next
      </Button>
    </div>
    </div></div>
    </div></div>
  );
};

export default Step2;
