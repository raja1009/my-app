import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, updateForm } from '../actions/formActions';
import { TextField, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import '../../src/assets/css/bootstrap.min.css';
import '../../src/assets/css/responsive.css';
import '../../src/assets/css/app.min.css';
const Step4 = () => {
  const dispatch = useDispatch();
  const { bankAccount, bankName, ifsc } = useSelector((state) => state.form.data);
  const navigateTo=useNavigate()

  const handleNext = () => {
    if (bankAccount && bankName && ifsc) {
      //dispatch(nextStep());
      navigateTo('/step5')

    }
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
          <div className="card card_shadow">
            <div className="card-body card-body-adjustment">
      <h2>Step 4: Bank Information</h2>
      <TextField
        label="Bank Account Number"
        value={bankAccount}
        onChange={(e) => dispatch(updateForm('bankAccount', e.target.value))}
      />
      <TextField
        label="Bank Name"
        value={bankName}
        onChange={(e) => dispatch(updateForm('bankName', e.target.value))}
      />
      <TextField
        label="IFSC Code"
        value={ifsc}
        onChange={(e) => dispatch(updateForm('ifsc', e.target.value))}
      />
      <Button onClick={handleNext} disabled={!bankAccount || !bankName || !ifsc}>
        Next
      </Button>
      </div>
    </div></div>
    </div></div>
  );
};

export default Step4;
