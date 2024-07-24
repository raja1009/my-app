import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, updateForm } from '../actions/formActions';
import { TextField, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import '../../src/assets/css/bootstrap.min.css';
import '../../src/assets/css/responsive.css';
import '../../src/assets/css/app.min.css';
const Step3 = () => {
  const dispatch = useDispatch();
  const { aadhar, pan } = useSelector((state) => state.form.data);
  const navigateTo=useNavigate()

  const handleNext = () => {
    if (aadhar && pan) {
     // dispatch(nextStep());
     navigateTo('/step4')
    }
  };
  const handlePrevious = () => {
    navigateTo('/step2'); // Navigate to the previous step, adjust the route as necessary
  };

  return (
    <div className='container'>
    <div className="row">
      <div className="col-md-12">
        <div className="card card_shadow">
          <div className="card-body card-body-adjustment">
      <h2>Step 3: Identity Information</h2>
      <TextField
        label="Aadhar Number"
        value={aadhar}
        onChange={(e) => dispatch(updateForm('aadhar', e.target.value))}
      />
      {/* Document upload can be handled with a file input component */}
      <TextField
        label="PAN Number"
        value={pan}
        onChange={(e) => dispatch(updateForm('pan', e.target.value))}
      />
      {/* Document upload can be handled with a file input component */}
     
      <div style={{display:"flex",gap:'10px'}}>
              <Button variant="contained" onClick={handlePrevious}>
                Previous
              </Button>
              <Button  variant="contained" onClick={handleNext} disabled={!aadhar || !pan}>
        Next
      </Button>

              </div>
      </div>
    </div></div>
    </div></div>
  );
};

export default Step3;
