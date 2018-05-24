import types from './types';

const initialState = [
  {
    type: 'USD',
    label: '$'
  },
  {
    type: 'EUR',
    label: '€'
  }
];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.GET_CURRENCY:
      return {
        ...state,
        ...action.payload
      };
  }

  return state;
};
