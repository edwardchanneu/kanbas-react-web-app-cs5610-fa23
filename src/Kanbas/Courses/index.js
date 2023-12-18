import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams
} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Quizzes from "./Quizzes";
import QuizDetails from "./Quizzes/QuizDetails";
import QuizEditor from "./Quizzes/QuizEditor";
import QuizPreview from "./Quizzes/QuizPreview";
import Grades from "./Grades";
import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.css'

function Courses() {
  const { courseNumber } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, coursesFolder, cNum, screen] = pathname.split("/")
  // const paths = pathname.split("/")

  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});

  const findCourseByNum = async (courseNumber) => {
    const response = await axios.get(
        `${URL}/${courseNumber}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseByNum(courseNumber);
  }, [courseNumber]);

  return (
      <div>
        <h3>Course {course.name} > {screen ? screen.replace("%20", " ") : ""}</h3>
        {/*paths[paths.length - 1]*/}
        <hr />
        <CourseNavigation />
        <div className="overflow-y-scroll position-fixed bottom-0 end-0 wd-courses-course-pages">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentNumber" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Quizzes/:quizNumber/Details" element={<QuizDetails />} />
            <Route path="Quizzes/:quizNumber/Edit/*" element={<QuizEditor />} />
            <Route path="Quizzes/:quizNumber/Preview" element={<QuizPreview />} />
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<h1>People</h1>} />
            <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
            <Route path="Discussions" element={<h1>Discussions</h1>} />
            <Route path="Announcements" element={<h1>Announcements</h1>} />
            <Route path="Pages" element={<h1>Pages</h1>} />
            <Route path="Files" element={<h1>Files</h1>} />
            <Route path="Rubrics" element={<h1>Rubrics</h1>} />
            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
            <Route path="Collaborations" element={<h1>Collaborations</h1>} />
            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
            <Route path="Settings" element={<h1>Settings</h1>} />
          </Routes>
        </div>

      </div>
  );
}

export default Courses;
