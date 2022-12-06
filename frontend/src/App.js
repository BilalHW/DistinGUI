import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom"
 function App() {
  
  return ( 
      <Router>
        <div className="p-1 bg-yellow-500 flex flex-row justify-between text-black font-serif font-bold">
          <div className="rounded border-2 border-black mr-5">
            <Link to="/">User Page</Link>
          </div>
          <div className="rounded border-2 border-black ml-5">
            <Link to="Admin">Admin Page</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<UserPage/>} exact/>
          <Route path="/Admin" element={<AdminPage/>}/>
      </Routes>
      </Router>


 

  );
}

export default App;
