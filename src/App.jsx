import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/author">Author</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
