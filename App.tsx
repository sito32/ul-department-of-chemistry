import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import GeminiAssistant from './components/GeminiAssistant';
import Home from './pages/Home';
import Research from './pages/Research';
import Syllabus from './pages/Syllabus';
import Practicals from './pages/Practicals';
import Faculty from './pages/Faculty';
import Tips from './pages/Tips';
import Admin from './pages/Admin';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/practicals" element={<Practicals />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <GeminiAssistant />
      </Layout>
    </Router>
  );
};

export default App;