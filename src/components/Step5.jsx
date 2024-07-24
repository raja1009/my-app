import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm } from '../actions/formActions';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../src/assets/css/bootstrap.min.css';
import '../../src/assets/css/responsive.css';
import '../../src/assets/css/app.min.css';
import { toast } from 'react-toastify';

const Step5 = () => {
  const dispatch = useDispatch();
  const termsAgreed = useSelector((state) => state.form.data.termsAgreed);
  const navigate = useNavigate();

  const handleFinish = () => {
    if (termsAgreed) {
      // Here you could submit the form or finalize the process
      toast.success('Form submitted successfully');

      navigate('/login'); // Navigate to the login page
    }
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
          <div className="card card_shadow">
            <div className="card-body card-body-adjustment">
      <h2>Step 5: Terms and Conditions</h2>
      <FormControlLabel
        control={
          <Checkbox
            checked={termsAgreed}
            onChange={(e) => dispatch(updateForm('termsAgreed', e.target.checked))}
          />
        }
        label="I agree to the terms and conditions"
      />
      <Button onClick={handleFinish} disabled={!termsAgreed}>
        Finish
      </Button>
      </div>
    </div></div>
    </div></div>
  );
};

export default Step5;
