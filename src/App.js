import logo from './logo.svg';
import './App.css';
import { Archive, Copy, Settings, Download, Moon } from 'react-feather';
import { Button } from './Components/Button'
function App() {
  return (
    <div className="App">
      <Button color="blue"><Download />Download</Button>
      <Button color="black"><Copy />Copy Code</Button>
      <Button color="yellow"><Archive />Export</Button>
      <Button color="grey">< Settings />Settings</Button>
      <Button color="black"><Moon />Dark Mode</Button>
    </div>
  );
}

export default App;
