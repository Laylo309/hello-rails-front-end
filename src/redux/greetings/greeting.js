const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

const URL = 'http://localhost:3000/v1/greetings';

const initialState = {
      id: 'Zeeze',
      greeting: 'Hey',
};

export function getGreetingsSuccess(payload) {
  return {
    type: GET_GREETINGS_SUCCESS,
    payload,
  }}

export const getGreetings = () => async (dispatch) => {
  await fetch(URL)
    .then((res) => res.json())
    .then((greeting) => dispatch(getGreetingsSuccess(greeting)))
    .catch((error) => console.log(error));
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GREETINGS_SUCCESS:
      return action.payload[Math.floor(Math.random() * 5)];
    default:
      return state;
  }
}

export default rootReducer;