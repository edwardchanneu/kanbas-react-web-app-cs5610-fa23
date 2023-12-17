import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account");
  };

  return (
      <div>
        <h1>Signin</h1>
        <input className="form-control"
               value={credentials.username}
               title="username"
               placeholder="username"
               onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
        <input className="form-control"
               value={credentials.password}
               title="password"
               placeholder="password"
               type="password"
               onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
        <button className="btn btn-primary"
                onClick={signin}>
          Signin
        </button>
      </div>
  );
}
export default Signin;
