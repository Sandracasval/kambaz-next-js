import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../../Database";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";

//we are trying to render the corresponding courses name
//parents should return a promise
export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  //this returns the course onject, and store it in a constant called course
  const course = courses.find((course) => course._id === cid);

  return (
    <div id="wd-courses">
      {/**attempt at rendering breadcrumb */}
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        <Breadcrumb course={course} />
      </h2>
      {/**this is where i put the rendering of breadcrumb */}
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
