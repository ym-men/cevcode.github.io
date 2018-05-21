import types from './types';

const initialState = {
    projects: ['1', '2', '3'],
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.FETCH_PROJECTS:
            return {
                ...state,
                ...action.payload,
            };
    }

    return state;
};
