import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setQuestions } from "../redux/viktorinaSlice";
// import axios from "axios";


const questionsData = [
    {
      "id": 1,
      "text": "What is your favorite color?",
      "options": ["Red", "Blue", "Green", "Yellow"]
    },
    {
      "id": 2,
      "text": "What is your preferred mode of transportation?",
      "options": ["Car", "Bike", "Bus", "Train"]
    }
  ]

const ViktorinaLoader: React.FC = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const loadQuestions = async () => {
   
  //       const response = await axios.get('/questions.json');
  //       const questionsData = response.data;

  //       dispatch(setQuestions(questionsData.questions));
     
  //   };

  //   loadQuestions();
  // }, [dispatch]);

  dispatch(setQuestions(questionsData));

  return null;
};

export default ViktorinaLoader;