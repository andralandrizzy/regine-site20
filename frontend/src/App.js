import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomeScreen from './screens/HomeScreen'
import BlogScreen from './screens/BlogScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import DashboardScreen from './screens/DashboardScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutListScreen from './screens/AboutListScreen';
import AboutEditScreen from './screens/AboutEditScreen';
import AboutScreen from './screens/AboutScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'

import PolicyScreen from './screens/PolicyScreen'
import PrivacyScreen from './screens/PrivacyScreen'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ServiceListScreen from './screens/ServiceListScreen';
import ServiceEditScreen from './screens/ServiceEditScreen';
import ServiceDetailsScreen from './screens/ServiceDetailsScreen'
import ServiceScreen from './screens/ServiceDetailsScreen';
import ContactListScreen from './screens/ContactListScreen';
import ContactDetailScreen from './screens/ContactDetailScreen';
import FooterSection from './components/FooterSection';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <main>
        
          <Routes>
            <Route path='/' element={<HomeScreen/>} exact/>
            <Route path='/blog' element={<BlogScreen/>}/>
            <Route path='/dashboard' element={<DashboardScreen/>}/>
            <Route path='/profile' element={<ProfileScreen/>}/>
            <Route path='admin/servicelist' element={<ServiceListScreen/>}/>
            <Route path='admin/service/:id/edit' exact element={<ServiceEditScreen/>} />
            <Route path='/service/:id/details' exact element={<ServiceDetailsScreen/>} />
            <Route path='admin/service' element={<ServiceScreen/>}/>
            <Route path='admin/aboutlist' element={<AboutListScreen/>}/>
            <Route path='admin/about/:id/edit' exact element={<AboutEditScreen/>} />
            <Route path='admin/contactlist' element={<ContactListScreen/>}/>
            <Route path='admin/contact' element={<ContactDetailScreen/>}/>
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path='/register' element={<RegisterScreen/>}/>
          <Route path='/about/:id' element={<AboutScreen/>} />
          <Route path='/admin/userlist' element={<UserListScreen/>} />
          <Route path='/admin/user/:id/edit' element={<UserEditScreen/>} />
          {/* <Route
            path='/admin/aboutlist/:pageNumber'
            component={AboutListScreen}
            exact
          /> */}
          {/* <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          /> */}
          <Route path='/policy' element={PolicyScreen} exact />
          <Route path='/privacy' element={PrivacyScreen} exact />
          </Routes>
        </main>
        <FooterSection/>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
