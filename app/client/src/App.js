 import FormStd from './FormStd';
import TableStd from './TableStd';
import Edit from './Edit';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import { Route,Routes, BrowserRouter as Router,Navigate} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' Component={TableStd} ></Route>
        <Route path="*" Component={<Navigate to="/" replace />} />
        {/* <Route path='/nvigate' Component={<Navigate to="/"/>} ></Route> */}
        <Route path='/FormStd' Component={FormStd} ></Route>
        <Route path='/Edit' Component={Edit} ></Route>
      </Routes>
      </Router>  
      
      
    </div>
  );
}

export default App;
