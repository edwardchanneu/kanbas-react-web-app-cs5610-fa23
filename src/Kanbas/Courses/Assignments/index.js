import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";


function Assignments() {
  const { courseNumber } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
      (assignment) => assignment.course === courseNumber);
  return (
      <div>
        <h2>Assignments for course {courseNumber}</h2>
        <div className="list-group">
          {courseAssignments.map((assignment) => (
              <Link
                  key={assignment.number}
                  to={`/Kanbas/Courses/${courseNumber}/Assignments/${assignment.number}`}
                  className="list-group-item">
                {assignment.title}
              </Link>
          ))}
        </div>
      </div>
  );
}

export default Assignments;
