import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout';
import Loading from '@/components/common/Loading';

const Home = lazy(() => import('@/pages/home'));
const Event = lazy(() => import('@/pages/event'));
const User = lazy(() => import('@/pages/user'));

function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/event">
            <Route index element={<Event />}></Route>
          </Route>
          <Route path="/user">
            <Route index element={<User />}></Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
