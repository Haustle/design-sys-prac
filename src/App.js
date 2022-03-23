import logo from './logo.svg';
import './App.css';
import { Archive, Copy, Settings, Download, Moon } from 'react-feather';
import { Button } from './Components/Button'
import { useState, useRef, useEffect } from 'react';
import { Toast2 } from './Components/Toast'


function App() {

  const [viewToast, setViewToast] = useState(false);
  const timerRef = useRef(0);

  // useEffect(() => {
  //   return () => clearTimeout(timerRef.current)
  // }, [])

  return (
    <div className="App">
      <Button color="blue"><Download />Download</Button>
      <Button color="black"><Copy />Copy Code</Button>
      <Button color="yellow" 
        onClick={() => {
            setViewToast(x => !x)
            // window.clearTimeout(timerRef.current)
            // timerRef.current = window.setTimeout(() => {
            //   setViewToast(false);
            // }, 3000)
          }
        }
      
      ><Archive />Export</Button>
      <Button color="grey">< Settings />Settings</Button>
      <Button color="black"><Moon />Dark Mode</Button>

      <Toast2/>
    </div>
  );
}

export default App;
