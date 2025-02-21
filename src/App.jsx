import React, { useState, useEffect } from 'react'

import Description from './Components/Description'; 
import Options from './Components/Options';
import Feedback from './Components/FeedBack';

import Notification from './Components/Notification';

import './App.css'

function App() {
  
  const [feedback , setFeedback] = useState(() => {

    const savedFeedback = window.localStorage.getItem("saved-feedback")

    // Якщо там щось є, повертаємо це
    // значення як початкове значення стану
    if (savedFeedback !== null) {

      return JSON.parse(savedFeedback);
    }
  
    // У протилежному випадку повертаємо
    // яке-небудь значення за замовчуванням
    return { 
      good: 0,
      neutral: 0,
      bad: 0
    }

});
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType  => { 
    setFeedback(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  }
  
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      bad: 0,
      neutral: 0
    });
  };

  return (
    <>
      <Description></Description>
      <Options click={updateFeedback} totalValue={totalFeedback} reset={resetFeedback}></Options>
      {totalFeedback >= 1 ? <Feedback review={feedback} totalValue={totalFeedback}></Feedback> : <Notification></Notification>}
    </>
  )
}

export default App
