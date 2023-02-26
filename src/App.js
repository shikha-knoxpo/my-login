import './App.css';
import  {  BreakpointProvider } from 'react-socks';
import { useRoutes } from "react-router";
import routes from "./route/routes";
import Authentication from './components/Authentication';



function App() {
  const routing = useRoutes(routes);

  return (
    
    <BreakpointProvider>
    <Authentication><div className="App">
      {routing}
    </div></Authentication>
    
    </BreakpointProvider>
    
  );
}

export default App;
