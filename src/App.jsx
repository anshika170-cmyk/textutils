
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import  {
   BrowserRouter as Router, 
   Routes, 
   Route, 
  //  Switch,
   Link, 
   Outlet
   } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
     setTimeout(()=>{
      setAlert(null);
     },1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title='Textutils-Dark mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title='Textutils-Light mode';    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container">
        <Routes>
          <Route path="/about"
          element={<About/>}/>
          <Route path="/"
          element={ <TextForm
          heading="Enter the text to analyze"
          mode={mode}
          showAlert={showAlert}
        />}/>
          
        </Routes>
       
       
      </div>
      </Router>
    </>
  );
}

export default App;
