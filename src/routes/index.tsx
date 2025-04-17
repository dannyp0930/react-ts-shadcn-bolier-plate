import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/home';
import Event from '@/pages/event';
import User from '@/pages/user';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/user" element={<User />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
