
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Research from "./Pages/Research";
import People from "./Pages/People.jsx";
import Gallery from "./Pages/Gallery";
import Publications from "./Pages/Publications";
import Supervisor from "./Pages/Supervisorpage.jsx";
import PersonProfile from "./Pages/PersonProfile";
import Collaborations from "./Pages/Collaborations";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/dashboard";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PersonProfile />} />

          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/supervisor" element={<Supervisor />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Admin Dashboard */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
