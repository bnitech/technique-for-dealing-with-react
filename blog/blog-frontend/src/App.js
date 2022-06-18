import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import WritePage from './pages/WritePage.tsx';
import PostPage from './pages/PostPage.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/@:username">
        <Route index element={<PostListPage />} />
        <Route path=":posetId" element={<PostPage />} />
      </Route>
    </Routes>
  );
}

export default App;
