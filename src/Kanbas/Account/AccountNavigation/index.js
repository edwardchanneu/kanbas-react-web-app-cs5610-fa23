import { Link, useLocation } from "react-router-dom"

function AccountNavigation() {
  const { pathname } = useLocation();
  return (
      <nav className="nav nav-tabs mt-2">
        <Link to="/Kanbas/Account/ViewAccount"
              className={`nav-link ${pathname.includes("ViewAccount") ? "active" : ""}`}>
          Account
        </Link>
        <Link to="/Kanbas/Account/Signin"
              className={`nav-link ${pathname.includes("Signin") ? "active" : ""}`}>
          Signin
        </Link>
        <Link to="/Kanbas/Account/Signup"
              className={`nav-link ${pathname.includes("Signup") ? "active" : ""}`}>
          Signup
        </Link>
      </nav>
  );
}

export default AccountNavigation;
