
import Awardwinning from '../assets/Component/Awardwinning'
import Items from '../assets/Component/Items'
import Navbar from '../assets/Component/Navbar'
import Presentation from '../assets/Component/Presentation'
import '../mainpage/Mainpage.css'

function Mainpage (){
  return (
    <div>
      <div className="navigation">
      <Navbar />
      </div>
      <div className="presentpage">
      <Presentation/>
      </div>
      
      <div className="items">
       <Awardwinning/>
       </div>

       <div className="items">
       <Items/>
       </div>
       
       
    </div>
     
    
  )
}

export default Mainpage



