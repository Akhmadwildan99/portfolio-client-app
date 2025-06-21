import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:slug" element={<ArticleDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
