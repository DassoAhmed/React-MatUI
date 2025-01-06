// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Products from './Products';
import { Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Products/>
    </div>
  );
}

export default App;
