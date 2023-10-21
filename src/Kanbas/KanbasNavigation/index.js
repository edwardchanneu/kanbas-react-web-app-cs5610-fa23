import { Link, useLocation } from "react-router-dom";
import './index.css'

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox",
                         "History", "Studio", "Commons", "Help"];
  const linkToIconMap = {
    "Account" : "fa-solid fa-circle-user wd-kanbas-account",
    "Dashboard" : "fa-solid fa-gauge",
    "Courses" : "fa fa-book",
    "Calendar" : "fa-regular fa-calendar-days",
    "Inbox" : "fa fa-inbox",
    "History" : "fa fa-history",
    "Studio" : "fa-solid fa-computer",
    "Commons" : "fa-solid fa-right-from-bracket",
    "Help" : "fa fa-question-circle",
  }
  const { pathname } = useLocation();

  return (
      // <!-- Kanbas Navigation -->
      <div className="container-fluid wd-kanbas-navigation list-group">
        <Link to="/Kanbas"
              className="list-group-item">
          <img src="/images/neu-logo.jpg"></img>
        </Link>
        {links.map((link, index) => (
            <Link key={index}
                  to={`/Kanbas/${link}`}
                  className={`list-group-item 
                              ${pathname.includes(link) ? "wd-kanbas-active" : ""}`} >

              {/* still using fontawesome */}
              {/* when switched to react-icons can do: */}
              {/* {linkToIconMap[link]} */}
              <i className={linkToIconMap[link]}></i><br />
              {link}
            </Link>
        ))}
      </div>
  );
}

export default KanbasNavigation;
