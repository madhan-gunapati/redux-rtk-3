import {Routes, Route} from 'react-router-dom'
import Home from "./routes/Home";


const App = ()=><div>
  From App... building Routes, State, components...
  <Routes>
    <Route path='/' element={<Home />} />
  </Routes>
 
</div>

export default App;
