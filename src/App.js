import { Route, Routes } from "react-router-dom";
import Breeds from "./pages/Breeds";
import Info from "./pages/Info";
import Main from "./pages/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <div className='App'>
        <Nav/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/breeds' element={<Breeds/>}/>
            <Route path='/info/:id' element={<Info/>}/>
        </Routes>
    </div>
  )
}

export default App