
import React, { useState ,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, updateForm } from '../actions/formActions';
import { TextField, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import '../../src/assets/css/bootstrap.min.css';
import '../../src/assets/css/responsive.css';
import '../../src/assets/css/app.min.css';
const Step1 = () => {
  const navigateTo=useNavigate()
  const dispatch = useDispatch();
  const mobile = useSelector((state) => state.form.data.mobile);
  const step = useSelector((state) => state.form.step);

  const [localMobile, setLocalMobile] = useState(mobile); // Local state for input field
  useEffect(() => {
    localStorage.setItem('signupStep', step);
  }, [step]);

  const validSteps = [1, 2, 3, 4, 5];
  const redirectTo = validSteps.includes(step) ? `/step${step}` : '/step1';
console.log("redirectTo",redirectTo)
  const handleNext = () => {
    console.log("Current Mobile:", localMobile); // Log the current mobile value

    // Validate mobile number (e.g., non-empty)
    if (localMobile) {
      console.log("Dispatching nextStep"); // Log action dispatch
      //dispatch(nextStep());
      navigateTo('/step2')

    } else {
      alert("Please enter a mobile number.");
    }
  };

  // Update local state on change and dispatch the updateForm action
  const handleChange = (e) => {
    const value = e.target.value;
    setLocalMobile(value); // Update local state
    dispatch(updateForm('mobile', value)); // Update Redux state
  };

  return (
    <div className='container'>
    <div className="row">
      <div className="col-md-12">
        <div className="card card_shadow">
          <div className="card-body card-body-adjustment">
      <h2>Step 1: Enter Mobile Number</h2>
      <TextField
        label="Mobile Number"
        value={localMobile}
        onChange={handleChange}
      />
      

      <div style={{display:"flex",gap:'10px'}}>
      <Button variant="contained" onClick={handleNext} disabled={!localMobile}>
        Next
      </Button>
              </div>
      </div>
    </div></div>
    </div></div>
  );
};

export default Step1;
