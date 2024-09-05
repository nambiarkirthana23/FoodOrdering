import NavBar from './Components/NabBar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import ContactUs from './Components/Contact'
import './App.css'
import { Route } from 'react-router-dom'; 
import Account from './Components/Account'
import { Routes } from 'react-router-dom'; 
import OrderFood from './Components/OrderFood'
import CreateAccount from './Components/CreateAccount'
function App() {
  return (
    <>
     <NavBar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     {/* <Route path='/contact' element={<Services/>}/> */}
     <Route path='/service' element={<Services/>}></Route>
     <Route path='/contactUs' element={<ContactUs/>}></Route>
     <Route path='/loginPage'element={<Account/>}></Route>
     <Route path='/orderFood' element={<OrderFood/>}></Route>
     {/* <Services/> */}
     <Route path="/createAccount" element={<CreateAccount/>}></Route>
     </Routes>
    </>
  );
}

export default App;
