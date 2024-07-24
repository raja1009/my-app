// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import {formReducer} from '../reducers/formReducer';

// const rootReducer = combineReducers({
//   form: formReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import {formReducer} from '../reducers/formReducer';

// const rootReducer = combineReducers({
//   form: formReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import formReducer  from '../reducers/formReducer';
const store = configureStore({
  reducer: {
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});

export default store;

