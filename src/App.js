import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import AboutUs from './pages/aboutus/aboutUs';
import ContactUs from './pages/contactus/contactUs';
import SinglePage from './pages/singlePage/singlePage';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Project from './Components/project/project';
import NotFound from './pages/not_found/notFound';
import LogIn from './Components/login/logIn';
import Register from './Components/register/register';



function App() {
  return (<>
  <div className="container mt-5">
  <Header/>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/project" element={<Project/>}></Route>
<Route path="/about" element={<AboutUs/>}></Route>
 {/* nested routes */}
<Route path="/contact" element={<ContactUs/>}>

  <Route index element={<LogIn/>}/>
  <Route Route path="login" element={<LogIn/>}/>
  <Route Route path="register" element={<Register/>}/>
</Route>

<Route path="/details/:id" element={<SinglePage/>}></Route>
<Route path="*" element={<NotFound/>}></Route>

</Routes>
<Footer/>
  </div>
    </>
  );
}

export default App;
