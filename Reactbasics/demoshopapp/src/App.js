import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  return (
    <div>
    <Item name="Nirma" ></Item>
    <ItemDate day="20" month="june" year="1998"></ItemDate>

    <Item name="SurfExcel" ></Item>
    <ItemDate day="22" month="july" year="1999"></ItemDate>

    <Item name="555" ></Item>
    <ItemDate day="23" month="August" year="2000"></ItemDate>
    <div className="App">Hello jee</div>
    </div>
  );
}

export default App;
