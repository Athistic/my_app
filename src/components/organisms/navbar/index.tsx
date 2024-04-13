import { NavLink, Outlet } from "react-router-dom";

export const NavbarWrapper = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="site-nav">
      <ul>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/items">Items</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/">Home</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
