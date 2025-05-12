import { Routes, Route } from 'react-router-dom';
import Home from '../pages/ts/Home';
import Menu from '../pages/ts/Menu';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
};

export default AppRouter;
