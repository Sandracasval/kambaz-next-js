"use client";
import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
//import { courses } from "../../Database";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

//we are trying to render the corresponding courses name
//parents should return a promise
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);
  // ADDING A USE STATE FOR THE SANDWHICH
  //TRUE MEANS ITS VISIBLE
  //FALSE MEANS ITS NOT

  const [activeNav, setActiveNav] = useState(true);
  return (
    <div id="wd-courses">
      {/**attempt at rendering breadcrumb */}
      <h2 className="text-danger">
        {/**adding the sandwhich button
         * ON CLICK IT FLIPS THE STATE BETWEEN TRUE AND DFALSE
         */}
        <button
          type="button"
          className="border-0 bg-transparent me-3"
          title="Sandwich nav bar"
          onClick={() => setActiveNav((s) => !s)}
          style={{ lineHeight: 0 }}
        >
          <FaAlignJustify className="fs-4 mb-1 text-danger" />
        </button>
        <Breadcrumb course={course?.name} />
      </h2>
      {/**this is where i put the rendering of breadcrumb */}
      <hr />
      {/**ADDING CONDITIONAL RENDERING AS WELL  */}
      <div className="d-flex">
        {activeNav && (
          <div className="d-none d-md-block">
            <CourseNavigation />
          </div>
        )}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
