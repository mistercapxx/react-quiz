import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setAnswer, nextQuestion } from "../redux/viktorinaSlice";
import { styles } from "./Question.styles";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { exportToCSV } from "../utils/exportUtils";

const Question: React.FC = () => {
  const dispatch: AppDispatch = useDispatch(); 
  const { t } = useTranslation();
  const currentQuestion = useSelector((state: RootState) => state.viktorina.currentQuestion);
  const questions = useSelector((state: RootState) => state.viktorina.questions);
  const question = questions[currentQuestion];
  const answers = useSelector((state: RootState) => state.viktorina.answers);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [highlightedWord, setHighlightedWord] = useState<string | null>(null);


  useEffect(() => {
  if(question)
  {
    const words = t(`questions.${question.id}.text`).split(" ");
    const randomIndex = Math.floor(Math.random() * words.length);
    setHighlightedWord(words[randomIndex]);
  }
   
  }, [question,t]);

  if (!question) {
    return <div>wweklnd</div>; 
  }

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    dispatch(setAnswer({ questionId: question.id, answer: option }));
    setTimeout(() => dispatch(nextQuestion()), 200);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const answersArray = Object.keys(answers).map(key => ({
    questionId: Number(key),
    answer: answers[Number(key)]
  }));

  const handleExportCSV = () => {
    exportToCSV(answersArray, 'answers.csv');
  };



  return (
    <div style={styles.container}>
           <LanguageSwitcher />
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

        {t(`questions.${question.id}.text`).split(" ").map((word, index) =>
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
    {t(`questions.${question.id}.options.${option}`)}
          </div>
        ))}
      </div>

      <button
        style={styles.nextButton}
        onClick={() => dispatch(nextQuestion())}
      >
{t('next')}
      </button>

         <button
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
            marginTop:'20px'
                
            }}
            onClick={handleExportCSV}
        >
            <img
                src="/images/csv-icon-1791x2048-ot22nr8i.png"
                alt={t('export_csv')}
                style={{ width: '30px', height: '35px' }}
            />
        </button>
    </div>
  );
};

export default Question;