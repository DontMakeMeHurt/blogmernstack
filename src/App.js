import './App.css';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout/Layout'
import IndexPage from './components/pages/IndexPage'
import LoginPage from './components/pages/login/LoginPage'
import RegisterPage from './components/pages/RegisterPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout /> }>
        <Route index element={<IndexPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
