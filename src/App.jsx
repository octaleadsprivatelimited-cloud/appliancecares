import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CommercialServices from './pages/CommercialServices';
import EmergencyRepairs from './pages/EmergencyRepairs';
import MaintenancePlans from './pages/MaintenancePlans';
import FAQs from './pages/FAQs';
import ServiceAreas from './pages/ServiceAreas';
import SupportCenter from './pages/SupportCenter';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/commercial-services" element={<CommercialServices />} />
            <Route path="/emergency-repairs" element={<EmergencyRepairs />} />
            <Route path="/maintenance-plans" element={<MaintenancePlans />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/support-center" element={<SupportCenter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
