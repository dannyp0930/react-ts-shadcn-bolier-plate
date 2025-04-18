import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './sidebar';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Sidebar />
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
