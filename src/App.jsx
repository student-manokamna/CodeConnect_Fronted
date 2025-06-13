import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import store from "./utils/appStore"
import { Provider } from "react-redux";
import Feed from "./components/Feed";
import Connection from "./components/Connection";
import Requests from "./components/Requests";

import Premium from "./components/Premium";
import Intail from "./components/Intail";
import Signup from "./components/Signup";
function App() {
  

  return (
    <>
      <Provider store={store}> 
    <BrowserRouter basename="/" >
    <Routes>
    <Route path="/" element={<Body/>}> 
    <Route path="/" element={<Intail/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/connection" element={<Connection/>} />
    <Route path="/requests" element={<Requests/>} />
    <Route path="/premium" element={<Premium/>} />
     <Route path="/feed" element={<Feed/>} />
    </Route>
    
    </Routes>
    </BrowserRouter>
    </Provider>
      {/* <h1 className="text-3xl font-bold underline ">Hello world!</h1> */}
    </>
  );
}

export default App;
