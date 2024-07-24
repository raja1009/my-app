export const nextStep = () => ({ type: 'NEXT_STEP' });
export const previousStep = () => ({ type: 'PREVIOUS_STEP' });
export const updateForm = (field, value) => ({
  type: 'UPDATE_FORM',
  payload: { field, value },
});
export const setStep = (step) => ({ type: 'SET_STEP', payload: step });
