import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";


function AssignmentEditor() {
  const { assignmentNumber } = useParams();
  const assignment = db.assignments.find(
      (assignment) => assignment.number === assignmentNumber);


  const { courseNumber } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseNumber}/Assignments`);
  };
  return (
      <div>
        <h2>Assignment Name</h2>
        <input value={assignment.title}
               className="form-control mb-2" />
        <Link to={`/Kanbas/Courses/${courseNumber}/Assignments`}
              className="btn btn-danger">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-success me-2">
          Save
        </button>
      </div>
  );
}

export default AssignmentEditor;
