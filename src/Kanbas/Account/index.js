import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./AccountNavigation";
import ViewAccount from "../users/account";
import Signin from "../users/signin";
import Signup from "../users/signup";
import UserTable from "../users/table";

function Account() {
  return (
      <div className="container">
        <AccountNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Account/ViewAccount" />} />
            <Route path="/ViewAccount" element={<ViewAccount />} />
            <Route path="/ViewAccount/:num" element={<ViewAccount />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/admin/users" element={<UserTable />} />
          </Routes>
        </div>
      </div>
  );
}

export default Account;
