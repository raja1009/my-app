// const initialState = {
//   step: 1,
//   data: {
//     mobile: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     address: '',
//     aadhar: '',
//     pan: '',
//     bankAccount: '',
//     bankName: '',
//     ifsc: '',
//     termsAgreed: false,
//   },
// };

// // Inside formReducer.js
// const formReducer = (state = initialState, action) => {
//   console.log("Reducer Action:", action); // Debugging log
//   console.log("Reducer Action1:", state); // Debugging log

//   switch (action.type) {
//     case 'NEXT_STEP':
//       return { ...state, step: state.step + 1 };
//     case 'PREVIOUS_STEP':
//       return { ...state, step: state.step - 1 };
//     case 'UPDATE_FORM':
//       return {
//         ...state,
//         data: { ...state.data, [action.payload.field]: action.payload.value },
//       };
//     case 'SET_STEP':
//       return { ...state, step: action.payload };
//     default:
//       return state;
//   }
// };


// export default formReducer;
// formReducer.js

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('formState');
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Failed to load state from localStorage:", err);
    return initialState;
  }
};

// Initial state
const initialState = {
  step: 1,
  data: {
    mobile: '',
    firstName: '',
    lastName: '',
    email: '',
    password:'',
    address: '',
    aadhar: '',
    pan: '',
    bankAccount: '',
    bankName: '',
    ifsc: '',
    termsAgreed: false,
  },
};

const loadedState = loadState(); // Initialize state from localStorage

// Reducer function
const formReducer = (state = loadedState, action) => {
  console.log("Reducer Action:", action); // Debugging log
  console.log("Reducer State:", state); // Debugging log

  switch (action.type) {
    case 'NEXT_STEP':
      const nextStepState = { ...state, step: state.step + 1 };
      localStorage.setItem('formState', JSON.stringify(nextStepState));
      return nextStepState;
    case 'PREVIOUS_STEP':
      const prevStepState = { ...state, step: state.step - 1 };
      localStorage.setItem('formState', JSON.stringify(prevStepState));
      return prevStepState;
    case 'UPDATE_FORM':
      const updatedData = { ...state.data, [action.payload.field]: action.payload.value };
      const updateFormState = { ...state, data: updatedData };
      localStorage.setItem('formState', JSON.stringify(updateFormState));
      return updateFormState;
    case 'SET_STEP':
      const setStepState = { ...state, step: action.payload };
      localStorage.setItem('formState', JSON.stringify(setStepState));
      return setStepState;
    default:
      return state;
  }
};

export default formReducer;
