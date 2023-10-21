import { Link } from "react-router-dom"

function CourseStatus() {
  return (
      <>
        <h2>Course Status</h2>

        <button>Unpublish</button>
        <button>Published</button>

        <ul>
          <li>
            <Link to="">
              Import Existing Content
            </Link>
          </li>
          <li>
            <Link to="">
              Import From Commons
            </Link>
          </li>
          <li>
            <Link to="">
              Choose Home Page
            </Link>
          </li>
          <li>
            <Link to="">
              View Course Stream
            </Link>
          </li>
          <li>
            <Link to="">
              New Announcement
            </Link>
          </li>
          <li>
            <Link to="">
              New Analytics
            </Link>
          </li>
          <li>
            <Link to="">
              View Course Notifications
            </Link>
          </li>
        </ul>

        <h2>Coming Up</h2>

        <Link to="">View Calendar</Link>
        <ul>
          <li>
            <Link to="">
              Lecture CS4550.12631.202410 Sep 7 at 11:45am
            </Link>
          </li>
          <li>
            <Link to="">
              Lecture CS4550.12631.202410 Sep 11 at 11:45am
            </Link>
          </li>
          <li>
            <Link to="">
              CS5610 06 SP23 Lecture Sep 11 at 6pm
            </Link>
          </li>
        </ul>
      </>
  );
}

export default CourseStatus;
