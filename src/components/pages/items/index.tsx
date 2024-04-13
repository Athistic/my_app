import { NavLink, Outlet } from "react-router-dom";
import { items } from "../../../data";

const Items = () => {
  return (
    <>
      <>
        {items.map((item) => {
          return (
            <ul key={item}>
              <NavLink to={`/items/${item}`}>{item}</NavLink>
            </ul>
          );
        })}
      </>
      <Outlet />
    </>
  );
};

export default Items;
