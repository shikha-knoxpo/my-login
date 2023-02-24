import logo from './logo.svg';
import './App.css';
import BackGround from './components/BackGround';
import  {  BreakpointProvider } from 'react-socks';


function App() {
  return (
    <BreakpointProvider>
    <div className="App">
      <BackGround/>
    </div>
    </BreakpointProvider>
  );
}

export default App;
