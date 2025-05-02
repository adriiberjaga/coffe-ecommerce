import { Routes, Route } from 'react-router-dom';
import Home from '../pages/ts/Home';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/catalog" element={<Catalog />} /> */}
    </Routes>
  );
};

export default AppRouter;
