import './App.css'
import ItemsComponent from './Components/ItemsComponent'
import { HashRouter,Route,Routes} from 'react-router-dom'
import ItemDetail from './Components/Itemdetails'
import Loginpage from './Components/login'
function App() {
  return  (
    <HashRouter>
     
   <Routes>
   <Route  path='/' Component={Loginpage}/>
   <Route exact path='/items' Component={ItemsComponent}/>
    <Route exact path='/details' Component={ItemDetail}/>
 
   </Routes>
    </HashRouter>
  )
}

export default App
