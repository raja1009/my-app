import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { setStep } from './actions/formActions';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Login from './Pages/Login';

function App() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.form.step);

  // Debugging step value
  console.log("Current Step:", step);

  useEffect(() => {
    const storedStep = localStorage.getItem('signupStep');
    if (storedStep) {
      // Ensure the step is a valid number
      const parsedStep = parseInt(storedStep, 10);
      if (!isNaN(parsedStep)) {
        dispatch(setStep(parsedStep));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('signupStep', step);
  }, [step]);

  // Define valid steps range
//   const validSteps = [1, 2, 3, 4, 5];
//   const redirectTo = validSteps.includes(step) ? `/step${step}` : '/step1';
// console.log("redirectTo",redirectTo)
  return (
    <Routes>
      <Route path="/step1" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
      <Route path="/step3" element={<Step3 />} />
      <Route path="/step4" element={<Step4 />} />
      <Route path="/step5" element={<Step5 />} />
      <Route path="/Login" element={<Login />} />
      {/* Redirect to the correct step or default to /step1 */}
      {/* <Route path="*" element={<Navigate to={redirectTo} />} /> */}
    </Routes>
  );
}

export default App;
