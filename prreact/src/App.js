import logo from './logo.svg';
import './App.css';
import SetTimeOut from './Concepts/SetTimeOut';
import Fetch from './Concepts/Fetch';
import Counter from './Counter/Counter';
import {FormPost} from './Concepts/FormPost';
import New from './Concepts/New';
import Todo from './Todo/Todo';
import OnMouseMove from './Events/OnMouseMove';
import Form from './Form/Form';
import Todos from './UseEff/Todos';
import Timer from './UseEff/Timer';

function App() {
  return (
    <div className="App">
   {/* <Todo/> */}
   <OnMouseMove/>
   <Form/>
{/* <Counter/> */}
    {/* <SetTimeOut/>
 <Fetch/>
<FormPost/>  */}
<Todos/>
{/* <New/> */}
<Timer/>
    </div>
  );
}

export default App;
