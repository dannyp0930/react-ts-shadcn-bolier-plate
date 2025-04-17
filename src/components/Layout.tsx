import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/event">이벤트 관리</Link>
        <Link to="/user">사용자 관리</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
