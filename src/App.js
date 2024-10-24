import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { About } from'./components';
import { Contac } from'./components';
import { Home } from'./components';
import { Recordar } from'./components';
import { NavBarExample } from'./components';
import { NavBarExample2 } from'./components';



import { BrowserRouter,Navigate,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
     
      <Routes>
      <Route>
      <Route path='/' element={ <NavBarExample /> } />;
      <Route index  element={ <Home />}/>;      
      <Route path='About' element={ <About />} />;
      <Route path='Contac' element={ <Contac />} />;
      <Route path='Recordar' element={ <Recordar />} />;
     




      <Route path='*' element={ <Navigate replace to="/"/>}/>;
      </Route>
      </Routes>
      
      
      </BrowserRouter>
       
      
     
    </div>
  );
}



export default App;
