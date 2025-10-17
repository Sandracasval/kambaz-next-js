"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
export default function CourseNavigation() {
  const pathName = usePathname();
  const pathname = usePathname();
  const params = useParams<{ cid: string }>();
  const cid = params?.cid;
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {/**here is where are tring to do this again
       * retrieve the courses ID from the dynamic route parameter
       * using the params onject in the layour or page component
       *
       */}
      {links.map((link) => (
        //this is where my code goes
        <Link
          key={link}
          href={`/Courses/${cid}/${link}`}
          className={`list-group-item ${
            pathname === `/Courses/${cid}/${link}`
              ? "active border-0"
              : "text-danger border-0"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
