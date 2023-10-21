import { Link, useParams, useLocation } from "react-router-dom";
import './index.css'

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings",
                        "Assignments", "Quizzes", "Grades", "People",
                        "Panopto Video", "Discussions", "Announcements",
                        "Pages", "Files", "Rubrics", "Outcomes",
                        "Collaborations", "Syllabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();

  return (
      <div className="container-fluid wd-course-navigation list-group">
        {links.map((link, index) => (
            <Link key={index}
                  to={`/Kanbas/Courses/${courseId}/${link}`}
                  className={`list-group-item 
                              ${pathname.includes(link) ? "wd-course-active" : ""}`} >
              {link}
            </Link>
        ))}
      </div>
  );
}

export default CourseNavigation;
