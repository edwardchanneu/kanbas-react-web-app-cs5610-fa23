import { Link } from "react-router-dom";
import db from "../Database";
import './index.css'

function Dashboard() {
  const courses = db.courses;

  return (
      <div className="container-fluid">
        {/* Breadcrumb Dashboard */}
        <h3>Dashboard</h3>
        <hr />

        <div className="container-fluid wd-dashboard-published-courses-grid">
          {/* Published Courses */}
          <h4>Published Courses ({courses.length})</h4>
          <hr />

          {/* Cards Grid */}
          <div className="container wd-dashboard-courses">
            <div className="row row-cols-1 row-cols-xxl-4 wd-dashboard-courses-grid">
              {courses.map((course, index) => (
                  <>
                    <div className="col">
                      <Link key={course._id}
                            to={`/Kanbas/Courses/${course._id}/Home`}
                            className="card h-100">
                        {/* might only need to have a dropdown or something */}
                        {/* instead of a Link tag */}
                        <Link key={`${index}${course._id}`}
                              to=""
                              className="wd-dashboard-course-icon-more">
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </Link>
                        <img src="/images/neu-logo.jpg"
                             className="card-img-top"
                             alt="..." />
                        <div className="card-body">
                          <h5 className="card-title wd-dashboard-course-header-title wd-dashboard-course-overflow"
                              title={course.name}>
                            {course.name}
                          </h5>
                          <h5 className="card-title wd-dashboard-course-header-subtitle wd-dashboard-course-overflow"
                              title={`${course.number}.17387.202410`}>
                            {course.number}.17387.202410
                          </h5>
                          <p className="card-text wd-dashboard-course-header-text wd-dashboard-course-overflow"
                             title="202410_2 Fall 2023 Semester Full Term Grad">
                            202410_2 Fall 2023 Semester Full Term Grad
                          </p>
                        </div>
                        <div className="wd-dashboard-course-action-container">
                          <Link key={`${course._id}${index}`}
                                to={`/Kanbas/Courses/${course._id}/Assignments`}
                                title="Assignments - CS5610 17387 Web Development SEC 03 Fall 2023 [VTL-2-OL]">
                            <i className="fa-solid fa-file-pen"></i>
                          </Link>
                        </div>
                      </Link>
                    </div>
                  </>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;
