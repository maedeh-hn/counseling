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
      <Route path='/e' exact element={<Select/>} />
      <Route path='/' exact element={<Home/>} />
     
      <Route path='/e/studentForm'  element={<StudentForm/>} />
      <Route path='/e/counselForm'  element={<CounselForm/>} />
      </Routes>
      
 
    </div>
  );
}

export default App;
