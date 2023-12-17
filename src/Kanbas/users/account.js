import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ViewAccount() {
  const { num } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const findUserById = async (num) => {
    const user = await client.findUserById(num);
    setAccount(user);
  };
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  const save = async () => {
    await client.updateUser(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };


  useEffect(() => {
    if (num) {
      findUserById(num);
    } else {
      fetchAccount();
    }
  }, []);

  return (
      <div className="w-50">
        <h1>Account</h1>
        {account && (
            <div>
              <input className="form-control"
                     value={account.password}
                     onChange={(e) => setAccount({ ...account,
                       password: e.target.value })}/>
              <input className="form-control"
                     value={account.firstName}
                     onChange={(e) => setAccount({ ...account,
                       firstName: e.target.value })}/>
              <input className="form-control"
                     value={account.lastName}
                     onChange={(e) => setAccount({ ...account,
                       lastName: e.target.value })}/>
              <input className="form-control"
                     value={account.dob}
                     // type="date"
                     onChange={(e) => setAccount({ ...account,
                       dob: e.target.value })}/>
              <input className="form-control"
                     value={account.email}
                     onChange={(e) => setAccount({ ...account,
                       email: e.target.value })}/>
              <select className="form-select"
                      onChange={(e) => setAccount({ ...account,
                role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>

              <button className="btn btn-primary"
                      onClick={save}>
                Save
              </button>
              <button className="btn btn-danger"
                      onClick={signout}>
                Signout
              </button>
              <Link to="/Kanbas/Account/admin/users" className="btn btn-warning w-100">
                Users
              </Link>
            </div>
        )}
      </div>
  );
}

export default ViewAccount;
