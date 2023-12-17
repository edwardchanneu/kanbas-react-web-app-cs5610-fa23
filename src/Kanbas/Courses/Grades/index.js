import db from "../../Database";
import { useParams } from "react-router-dom";

function Grades() {
  const { courseNumber } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseNumber);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseNumber);

  return (
      <div>
        <h1>Grades</h1>
        <div className="table-responsive">
          <table className="table">
            <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
            </thead>
            <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user.number === enrollment.user);
              return (
                  <tr>
                    <td>{user.firstName} {user.lastName}</td>
                    {assignments.map((assignment) => {
                      const grade = db.grades.find(
                          (grade) => grade.student === enrollment.user && grade.assignment === assignment.number);
                      return (<td>{grade?.grade || ""}</td>);})}
                  </tr>);
            })}
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default Grades;
