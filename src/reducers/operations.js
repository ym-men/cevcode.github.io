import types from './types';

const initialState = {
  list: [
    {
      id: '1',
      status: 'income',
      title: 'bablo',
      operation: {
        income: 10000
      }
    },
    {
      id: '2',
      status: 'expence',
      title: 'potratil :(',
      operation: {
        expence: 200
      }
    },
    {
      id: '3',
      status: 'expence',
      title: 'potratil opyat` :(',
      operation: {
        expence: 100
      }
    },
    {
      id: '4',
      status: 'expence',
      title: 'net deneg :(',
      operation: {
        expence: 8000
      }
    }
  ]
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FETCH_OPERATIONS:
      return {
        ...state,
        ...action.payload
      };
  }

  return state;
};
