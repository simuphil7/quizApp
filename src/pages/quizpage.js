import React from "react";
import Header from "../components/Header";
import "../styles/quizpage.css";
import { useState } from "react";
import { question } from "../data/question";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addScore, negateScore } from "../actions";

function Quizpage() {
  const score = useSelector((state) => state.trueScore);
  const dispatch = useDispatch();
  const [questionNumber, nxtQ] = useState(1);
  const [checked, toggCheck] = useState(false);
  const [optionsValue, toggOption] = useState(false);
  const [attemted, toggAttempt] = useState(false);
  const [selectOptions, toggSelect] = useState(-1);

  const disableOptions = () => {
    toggOption(!optionsValue);
  };
  const enableOptions = () => {
    toggOption(!optionsValue);
  };
  let selected;
  const checkAnswer = (props) => {
    selected = question[questionNumber - 1].options.indexOf(props);
    toggSelect(selected);

    toggAttempt(!attemted);
    disableOptions();

    console.log(selectOptions, selected);
    if (props === question[questionNumber - 1].ans) {
      dispatch(addScore());
      document.getElementsByClassName("blank-div")[0].style.backgroundColor =
        "#3DB843";
      document.getElementsByClassName("blank-div")[1].style.backgroundColor =
        "#3DB843";

      toggCheck(!checked);
    } else {
      if (score !== 0) dispatch(negateScore());

      document.getElementsByClassName("blank-div")[0].style.backgroundColor =
        "#E04129";
      document.getElementsByClassName("blank-div")[1].style.backgroundColor =
        "#E04129";
    }
  };

  const nextHandler = () => {
    if (attemted) {
      toggAttempt(!attemted);
      enableOptions();
      document.getElementsByClassName("mesg")[0].innerHTML = "";

      document.getElementsByClassName("blank-div")[0].style.backgroundColor =
        "#E6E7EE";
      document.getElementsByClassName("blank-div")[1].style.backgroundColor =
        "#E6E7EE";

      nxtQ(questionNumber + 1);
    } else {
      document.getElementsByClassName("mesg")[0].innerHTML =
        "Please select an option";
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="quizes">
        <div className="blank-div"></div>
        <div className="main-quiz">
          <div className="score">Score: {score} </div>
          <br />
          <div className="question-div">
            <p className="question">
              <span>{question[questionNumber - 1].tag}&nbsp;</span>
              {question[questionNumber - 1].que}
            </p>
          </div>

          <p className="mesg"></p>

          <ul>
            {question[questionNumber - 1].options.map((ele, i = 0) => (
              <label className="lab" for={i}>
              <li
                className={
                  attemted && selectOptions === i ? "option selected" : "option"
                }
              >
                <input
                  type="radio"
                  className="opt"
                  name="opt"
                  key={i + 1}
                  id={i}
                  onClick={() => {
                    checkAnswer(ele);
                  }}
                  disabled={optionsValue}
                />
                
                  {ele}
                
              </li>
              </label>
            ))}
          </ul>

          {questionNumber === 10 && attemted ? (
            <Link
              to={{
                pathname: "/result",
              }}
            >
              {" "}
              <button className="next"> Show Results</button>
            </Link>
          ) : (
            <button className="next" onClick={nextHandler}>
              Next
            </button>
          )}
        </div>
        <div className="blank-div"></div>
      </div>
    </div>
  );
}

export default Quizpage;
