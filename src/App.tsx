import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import ViktorinaLoader from './components/ViktorinaLoader';
import Question from './components/Question';

function App() {
  return (
 <Provider store={store}>
 <div>
  <ViktorinaLoader/>
  <Question/>
 </div>
 </Provider>
  );
}

export default App;