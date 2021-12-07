import getInitialGreeting from '../../utilities/getData';

// Initial State
const initialState = {
  greeting: '',
};

// Actions
export const GET_GREETING_REQUEST = '/greeting/GET_GREETING_REQUEST';

// Action Creators
export const getGreeting = async (dispatch) => {
  const greeting = await getInitialGreeting();
  return dispatch({
    type: GET_GREETING_REQUEST,
    payload: greeting,
  });
};

// Reducer
const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING_REQUEST:
      return { ...state, greeting: action.payload };

    default:
      return state;
  }
};

export default greetingReducer;
