import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.jpg"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/nlp.jpg" width={200} height={150} alt="nlp" />
            <div>
              <h5> CS4100 Natural Language Processing </h5>
              <p className="wd-dashboard-course-title">
                Computational modeling of LLMs
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/datascience.jpg"
              width={200}
              height={150}
              alt="datascience"
            />
            <div>
              <h5> DS3000 Foundations of Data Science </h5>
              <p className="wd-dashboard-course-title">
                Fundamentamental concepts for Data Scientists
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/graphicdesign.jpg"
              width={200}
              height={150}
              alt="graphicdesign"
            />
            <div>
              <h5> ARTG 2252 Graphic Design Principles </h5>
              <p className="wd-dashboard-course-title">
                Typography, Images, Language, Visual Appeal
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/productdesign.jpg"
              width={200}
              height={150}
              alt="productdesign"
            />
            <div>
              <h5> ARTG 3460 Identity and Brand Design </h5>
              <p className="wd-dashboard-course-title">
                Product design prototyping and fundamentals
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/creativefabrication.jpg"
              width={200}
              height={150}
              alt="creativefabrication"
            />
            <div>
              <h5> ARTG 3810 Creative Fabrication</h5>
              <p className="wd-dashboard-course-title">
                The creation of wearable art
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/musicgenres.jpg"
              width={200}
              height={150}
              alt="musicgenres"
            />
            <div>
              <h5> MUSC 1204 Analyzing Popular Genres</h5>
              <p className="wd-dashboard-course-title">
                Role of popular music and artists in society
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
