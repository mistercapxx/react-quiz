import React, { useEffect } from "react";
import { setQuestions } from "../redux/viktorinaSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
const ViktorinaLoader:React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await axios.get('/questions.json');
            dispatch(setQuestions(response.data));
        }
        fetchQuestions();
    },[dispatch]);

    return null;
};
export default ViktorinaLoader;