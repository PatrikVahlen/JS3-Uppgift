import { Routes, Route } from 'react-router-dom'
import CompanyPage from './pages/CompanyPage';
import HomePage from './pages/HomePage';
import ListCompanyPage from './pages/ListCompanyPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<CompanyPage />} />
        <Route path="/mypage" element={<HomePage />} />
        <Route path="/list" element={<ListCompanyPage />} />
      </Routes>
    </div>
  );
}

export default App;
