import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greeting/greeting';
import '../index.scss';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting);
  }, []);

  return (
    <div className="card" data-tilt data-tilt-scale="0.95" data-tilt-starty="40">
      <div className="year">
        <h2 className="card__title">{greeting}</h2>
      </div>
    </div>
  );
};

export default Greeting;
