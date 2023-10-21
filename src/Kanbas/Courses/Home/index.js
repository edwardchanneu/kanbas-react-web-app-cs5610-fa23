import Modules from "../Modules";
import CourseStatus from "../CourseStatus";

function Home() {
  return (
      <div className="container-fluid row">
        <div className="col">
          <Modules />
        </div>
        <div className="col-3">
          <CourseStatus />
        </div>
      </div>
  );
}

export default Home;
