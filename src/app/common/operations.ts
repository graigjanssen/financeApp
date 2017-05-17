import {ActionReducer, Action, State} from '@ngrx/store';
import {Operation} from './operation.model';

//definitions of actions that alter the State
export const ADD_OPERATION = 'Add an operstion';
export const REMOVE_OPERATION = 'Remove an operstion';
export const INCREMENT_OPERATION = 'Increment an operstion';
export const DECREMENT_OPERATION = 'Decrement an operstion';

// The initial state of the operations
const initialState:State = [];

export const operationsReducer: ActionReducer = (state = initialState, action: Action) => {
  switch (action.type) {

    case ADD_OPERATION:
      const operation:Operation = action.payload;
      return [...state, operation];

    case INCREMENT_OPERATION:
      const operation = ++action.payload.amount;
      return state.map(item => {
        return item.id === action.payload.id ? Object.assign({}, item, operation) : item;
      });

    case DECREMENT_OPERATION:
      const operation = --action.payload.amount;
      //update the state by creating a new object using Object.assign()
      return state.map(item => {
        return item.id === action.payload.id ? Object.assign({}, item, operation) : item;
      });

    case REMOVE_OPERATION:
      return state.filter(operation => {
        //filter items to exclude the item in the payload
        return operation.id !== action.payload.id;
      });

    default:
      // if the action.type is unknown, return the state
      return state;

   }
};
