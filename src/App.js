import React from 'react';
import Header from './components/Header'
import Quizcard from './components/QuizCard'
import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Header />
        <div className="quizes">
          <div className="blank">
         
          </div>
          <div className="quiz-titles">
            <Link to="/quiz">   <Quizcard /></Link>
            <Link to="/quiz">   <Quizcard /></Link>
            <Link to="/quiz">   <Quizcard /></Link>
            <Link to="/quiz">   <Quizcard /></Link>
            <Link to="/quiz">   <Quizcard /></Link>
            <Link to="/quiz">   <Quizcard /></Link>
              

          </div>
          <div className="blank">
         

          </div>
        </div>
    </div>
  );
}

export default App;
