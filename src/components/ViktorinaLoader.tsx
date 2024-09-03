import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setQuestions } from "../redux/viktorinaSlice";
import axios from "axios";

const ViktorinaLoader: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadQuestions = async () => {
   
        const response = await axios.get('/questions.json');
        const questionsData = response.data;

        dispatch(setQuestions(questionsData.questions));
     
    };

    loadQuestions();
  }, [dispatch]);

  return null;
};

export default ViktorinaLoader;