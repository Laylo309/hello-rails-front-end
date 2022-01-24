import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getGreetings } from '../redux/greetings/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  return (
    <div>
      Greeting:
      <button
        type="button"
        className="getGreetingsBtn"
        onClick={() => dispatch(getGreetings())}
      >
        Greeting
      </button>
      <br />
      <span>{greeting.greeting}</span>
    </div>
  );
};

export default Greeting;
