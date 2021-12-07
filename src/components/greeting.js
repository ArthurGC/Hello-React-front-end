import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greeting/greeting';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting);
  }, []);

  return (
    <div className="main-container">
      <div className="card card-1">
        <h2 className="card__title">{greeting}</h2>
      </div>
    </div>
  );
};

export default Greeting;
