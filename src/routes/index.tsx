import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Loading from '@/components/Loading';

const Home = lazy(() => import('@/pages/home'));
const Event = lazy(() => import('@/pages/event'));
const User = lazy(() => import('@/pages/user'));

function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
