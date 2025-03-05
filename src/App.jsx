
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Mainpage from './mainpage/Mainpage'
import Items from './assets/Component/Items'
import Card from './Pages/cart'




function App() {

  return (
  
    <>

     <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Mainpage/>}  />
      <Route path='/Items' element={<Items/>}  />
    </Routes>
    <Routes>
    <Route path='/Card' element={<Card/>}  />
    </Routes>
    </BrowserRouter>
     </>
  
     
    )
   
    
}

export default App






