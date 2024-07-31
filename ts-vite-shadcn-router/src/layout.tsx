import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header></header>
      <div>
        <Outlet />
      </div>
      <footer></footer>
    </div>
  );
}

export default Layout;