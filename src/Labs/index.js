import Nav from "../Nav"
import Assignment3 from "./a3"
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import { Link, useLocation } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import store from "./store"
import { Provider } from "react-redux"

function Labs() {
  const { pathname } = useLocation()
  return(
      <Provider store={store}>
        <div className="container">
          {/*<h1>Assignment 3</h1>*/}
          <Nav />
          <h1>Labs</h1>
          <div className="nav nav-pills">
            <Link to="/Labs/a3"
                  className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>
              Assignment 3
            </Link>
            <Link to="/Labs/a4"
                  className={`nav-link ${pathname.includes("a4") ? "active" : ""}`}>
              Assignment 4
            </Link>
            <Link to="/Labs/a5"
                  className={`nav-link ${pathname.includes("a5") ? "active" : ""}`}>
              Assignment 5
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<Navigate to="a3" />} />
            <Route path="a3" element={<Assignment3 />} />
            <Route path="a4" element={<Assignment4 />} />
            <Route path="a5" element={<Assignment5 />} />
          </Routes>
        </div>
      </Provider>
  );
}

export default Labs;
