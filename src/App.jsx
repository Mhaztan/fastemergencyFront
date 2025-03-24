
// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Emergency from './pages/Emergency';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import BlogDetails from './pages/BlogDetails';
import Home from './pages/Home';
import EmergencyDetails from './pages/EmergencyDetails';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import Disclaimer from './pages/Disclaimer';
import Terms from './pages/Terms';
import EmergencyPreparedness from './pages/EmergencyPreparedness';
import FirstAidGuides from './pages/FirstAidGuides';
import FireSafety from './pages/FireSafety';
import LoginForm from './admin/components/LoginForm';
import Admin from './admin/Admin';

function App() {
  const isAuthenticated = localStorage.getItem('adminToken') !== null;


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/emergency/:id" element={<EmergencyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/emergency-preparedness' element={<EmergencyPreparedness />} />
        <Route path="/first-aid-guides" element={<FirstAidGuides />} />
        <Route path='/fire-safety' element={<FireSafety />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<LoginForm />} />
        <Route path="/admin/*" element={isAuthenticated ? <Admin /> : <Navigate to="/admin/login" />} />  {/*Protect the routes*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;