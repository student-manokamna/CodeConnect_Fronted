import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import store from "./utils/appStore"
import { Provider } from "react-redux";
import Feed from "./components/Feed";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}> 
    <BrowserRouter basename="/" >
    <Routes>
    <Route path="/" element={<Body/>}> 
    <Route path="/" element={<Feed/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/profile" element={<Profile/>} />
    </Route>
    
    </Routes>
    </BrowserRouter>
    </Provider>
      {/* <h1 className="text-3xl font-bold underline ">Hello world!</h1> */}
    </>
  );
}

export default App;
