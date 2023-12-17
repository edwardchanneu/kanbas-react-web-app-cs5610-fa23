import { Link, useParams, useLocation } from "react-router-dom";
import './index.css'

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings",
                        "Assignments", "Quizzes", "Grades", "People",
                        "Panopto Video", "Discussions", "Announcements",
                        "Pages", "Files", "Rubrics", "Outcomes",
                        "Collaborations", "Syllabus", "Settings"];
  const { courseNumber } = useParams();
  const { pathname } = useLocation();

  return (
      <div className="container-fluid wd-course-navigation list-group">
        {links.map((link, index) => (
            <Link key={index}
                  to={`/Kanbas/Courses/${courseNumber}/${link}`}
                  className={`list-group-item 
                              ${pathname.replace("%20", " ").includes(link) ? "wd-course-active" : ""}`} >
              {/* used String.replace("%20", " ") to account for space in url/pathname */}
              {link}
            </Link>
        ))}
      </div>
  );
}

export default CourseNavigation;
