import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Title from './Components/Title';
import Subtitle from "./Components/Subtitle";
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Title title={"Todo-List"}/>
      <Subtitle subtitle={"Du 14 au 21 mars"}/>

      <Form/>
    </div>
  );
}

export default App;
