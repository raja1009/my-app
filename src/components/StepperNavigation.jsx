import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, previousStep } from '../actions/formActions';
import { Button } from '@mui/material';

const StepperNavigation = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.form.step);

  return (
    <div>
      {step > 1 && <Button onClick={() => dispatch(previousStep())}>Back</Button>}
      {step < 5 && <Button onClick={() => dispatch(nextStep())}>Next</Button>}
    </div>
  );
};

export default StepperNavigation;
