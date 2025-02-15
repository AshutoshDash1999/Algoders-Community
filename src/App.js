import Home from "./pages/home/Home";
// import Home from "./components/algoders/Home";
import TopBar from "./components/topbar/TopBar";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/contact";
import Blogs from "./components/blogs/Blogs";


import SinglePostPage from "./pages/singlePost/SinglePostPage";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";   //header<about us<images<footer



function App() {
  const { user } = useContext(Context);
  return (
    <div>
      <TopBar /> 
      {/* <Home/> */}
      
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/post/:postid" element={<SinglePostPage />} />
        <Route path="/write" element={user?<Write />:<Register/>} />
        <Route path="/settings" element={user?<Settings />:<Register/>} />
        <Route path='/login' element={user?<Home/>:<Login />} />
        <Route path='/register' element={user ? <Home/>:<Register />} />
        <Route path='/contact' element={ <Contact/> } />
      </Routes>
      
      <Footer/>
      

       </div>
  );
}

export default App;
