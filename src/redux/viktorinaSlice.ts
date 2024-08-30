import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Question {
    id:number;
    text:string;
    options:string[];
}
interface ViktorinaState {
    currentQuestion: number;
    questions: Question[];
    answers:Record<number,string>;

}
const initialState:ViktorinaState = {
    currentQuestion:0,
    questions:[],
    answers:{},
 
};

const viktorinaSlice = createSlice({
    name:'viktorina',
    initialState,
    reducers: {
        setQuestions(state,action:PayloadAction<Question[]>){
            state.questions = action.payload;
      
        },
        setAnswer(state,action:PayloadAction<{questionId:number;answer:string}>) {
            state.answers[action.payload.questionId] = action.payload.answer;
        },
        nextQuestion(state) {
            if(state.currentQuestion < state.questions.length - 1) {
                state.currentQuestion +=1;  
            }
        },
        previousQuestion(state) {
            if(state.currentQuestion > 0) {
                state.currentQuestion -= 1;
            }
        },
    },
});

export const {setQuestions,setAnswer,nextQuestion,previousQuestion} = viktorinaSlice.actions;
export default viktorinaSlice.reducer;
