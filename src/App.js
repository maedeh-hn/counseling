import StudentForm from './components/StudentForm/StudentForm';
import CounselForm from './components/CounselForm/CounselForm';

import { BrowserRouter, Route,Routes} from 'react-router-dom'

import Home from './components/Home';
import Select from './components/Select/Select'
import './App.css';

function App() {
  return (
  
    <div className="container">
    
   
 
      <Routes>
      <Route path='/e' exact component={<Select/>} />
      <Route path='/' exact component={<Home/>} />
     
      <Route path='/e/studentForm'  component={<StudentForm/>} />
      <Route path='/e/counselForm'  component={<CounselForm/>} />
      </Routes>
      
 
    </div>
  );
}

export default App;
