import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import Error from "./components/pages/Error";
import Post from "./components/pages/Post";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Logout from "./components/pages/Logout";
import Layout from "./components/Layout";
import PostLayout from "./components/PostLayout";
import PostDetails from "./components/pages/PostDetails";

function App() {
  const bgColor = {
    backgroundColor: "red"
  }

  const isLogged = true;

  const data = {
    st: "Sorry: User not logged in...Please login!"
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>React Router V6 Application</h1>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About bgColor={() =>{return bgColor.backgroundColor}} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:category" element={<Post />} />
          <Route path="/post/:category/:id" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={isLogged ? <Dashboard /> : <Navigate to="/Login" replace state={data} />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />}/>

          {/* <Route path="/" element={<Layout />}> */}
            {/*<Route path="/" element={<Home />} />*/}
            {/* <Route index element={<Home />} />
            <Route path="about" element={<About bgColor={() =>{ return bgColor.backgroundColor}} />} />
            <Route path="contact" element={<Contact />} />
            <Route path="post/:category" element={<Post />} />
            <Route path="post/:category/:id" element={<Post />} />
            <Route path="postlayout" element={<PostLayout />}>
              <Route path="postdetails" element={<PostDetails />} />
            </Route>
          </Route>
          <Route path="*" element={<h1>Sorry! Page Not Found!</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
