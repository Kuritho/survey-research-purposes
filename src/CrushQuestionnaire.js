import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CrushQuestionnaire = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const noButtonRef = useRef(null);
  const navigate = useNavigate();

  const questions = [
    "What's your name?",
    "How old are you?",
    "How do you stay motivated to study when you're feeling unmotivated or stressed?",
    "How do you balance your academic life with personal or social life?",
    "Pogi si Kurt no? 😊"
  ];

  const handleInputChange = (e) => {
    setAnswers({
      ...answers,
      [step]: e.target.value
    });
  };

  const handleNext = () => {
    if (step < questions.length) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const moveNoButton = () => {
    if (noButtonRef.current && step === questions.length) {
      const button = noButtonRef.current;
      const maxX = window.innerWidth - button.offsetWidth;
      const maxY = window.innerHeight - button.offsetHeight;
      
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      
      button.style.position = 'absolute';
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }
  };

  const handleYesClick = () => {
    if (step === questions.length) {
      navigate('/confession');
    }
  };

  return (
    <div className="questionnaire-container">
      <div className="progress-bar">
        {questions.map((_, index) => (
          <div 
            key={index} 
            className={`progress-step ${step > index ? 'completed' : ''} ${step === index + 1 ? 'active' : ''}`}
          ></div>
        ))}
      </div>
      
      <div className="question-card">
        <h2>{questions[step - 1]}</h2>
        
        {step < questions.length ? (
          <input
            type="text"
            value={answers[step] || ''}
            onChange={handleInputChange}
            placeholder="Your answer..."
          />
        ) : (
          <div className="button-group">
            <button 
              className="yes-button"
              onClick={handleYesClick}
            >
              Yes! 😍
            </button>
            <button
              ref={noButtonRef}
              className="no-button"
              onMouseEnter={moveNoButton}
              onClick={(e) => e.preventDefault()}
            >
              No 😢
            </button>
          </div>
        )}
        
        <div className="navigation-buttons">
          {step > 1 && (
            <button onClick={handlePrevious} className="nav-button prev">
              Previous
            </button>
          )}
          {step < questions.length && (
            <button 
              onClick={handleNext} 
              className="nav-button next"
              disabled={!answers[step]}
            >
              Next
            </button>
          )}
        </div>
      </div>
      
      <div className="hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="heart" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 20 + 10}px`,
            opacity: Math.random() * 0.5 + 0.3
          }}>👾</div>
        ))}
      </div>
    </div>
  );
};

export default CrushQuestionnaire;
