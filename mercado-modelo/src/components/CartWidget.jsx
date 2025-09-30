import { NavLink } from "react-router-dom";

function CartWidget() {
  return (
    <NavLink to="/cart" className="btn btn-outline-danger position-relative">
      🛒
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
      </span>
    </NavLink>
  );
}

export default CartWidget;
