import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setAnswer, nextQuestion } from "../redux/viktorinaSlice";
import { styles } from "./Question.styles";

const Question: React.FC = () => {
  const dispatch: AppDispatch = useDispatch(); ///
  const currentQuestion = useSelector((state: RootState) => state.viktorina.currentQuestion);
  const questions = useSelector((state: RootState) => state.viktorina.questions);
  const question = questions[currentQuestion];
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [highlightedWord, setHighlightedWord] = useState<string | null>(null);


  useEffect(() => {
  if(question)
  {
    const words = question.text.split(" ");
    const randomIndex = Math.floor(Math.random() * words.length);
    setHighlightedWord(words[randomIndex]);
  }
   
  }, [question]);



  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    dispatch(setAnswer({ questionId: question.id, answer: option }));
    setTimeout(() => dispatch(nextQuestion()), 200);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  if (!question) {
    return <div>Loading...</div>; // Или другое сообщение, если вопрос не загружен
  }

  return (
    <div style={styles.container}>
      <div style={styles.progressContainer}>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${progress}%` }}></div>
        </div>
        <div style={styles.pagination}>
          {currentQuestion + 1} / {questions.length}
        </div>
      </div>

      <div style={styles.questionInfo}>
        <h2 style={styles.questionTitle}>
          {question.text.split(" ").map((word, index) =>
            word === highlightedWord ? (
              <span key={index} style={styles.highlight}>{word} </span>
            ) : (
              <span key={index}>{word} </span>
            )
          )}
        </h2>
      </div>

      <div style={styles.optionsContainer}>
        {question.options.map((option) => (
          <div
           
            style={{
              ...styles.option,
              ...(selectedOption === option ? styles.optionSelected : {}),
            }}
            onClick={() => handleOptionChange(option)}
          >
            {option}
          </div>
        ))}
      </div>

      <button
        style={styles.nextButton}
        onClick={() => dispatch(nextQuestion())}
      >
        Next
      </button>
    </div>
  );
};

export default Question;