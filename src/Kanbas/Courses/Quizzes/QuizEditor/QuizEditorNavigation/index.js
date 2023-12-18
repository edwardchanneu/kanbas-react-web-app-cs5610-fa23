import {Link, useLocation} from "react-router-dom";

function QuizEditorNavigation() {
  const { pathname } = useLocation();
  return (
      <nav className="nav nav-tabs mt-2">
        <Link to="Details"
              className={`nav-link ${pathname.includes("Details") ? "active" : ""}`}>
          Details
        </Link>
        <Link to="Questions"
              className={`nav-link ${pathname.includes("Questions") ? "active" : ""}`}>
          Questions
        </Link>
      </nav>
  );
}

export default QuizEditorNavigation;
