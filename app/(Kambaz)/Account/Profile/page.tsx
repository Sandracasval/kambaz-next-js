import Link from "next/link";
import FormControl from "react-bootstrap/FormControl";
import FormSelect from "react-bootstrap/FormSelect";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {/**REPLACE EVERYTHING WITH FORM CONTROL */}
      <FormControl id="wd-username" placeholder="username" className="mb-2" />
      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
      />
      <FormControl
        id="wd-lastname"
        defaultValue="Alice"
        placeholder="First Name"
        className="mb-2"
      />
      <FormControl
        id="wd-firstname"
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="mb-2"
      />
      <FormControl
        id="wd-dob"
        defaultValue="2000-01-01"
        type="date"
        className="mb-2"
      />
      <FormControl
        id="wd-email"
        defaultValue="alice@wonderland"
        type="email"
        className="mb-2"
      />
      <FormSelect id="wd-role" className="mb-2" defaultValue="student">
        <option value="USER">USER</option>
        <option value="ADMIN">ADMIN</option>
        <option value="FACULTY">FACULTY</option>
        <option value="STUDENT">STUDENT</option>
      </FormSelect>

      <Link
        id="wd-signout-btn"
        href="/Account/Signin"
        className="btn btn-danger w-100 mb-2"
      >
        Sign out{" "}
      </Link>
    </div>
  );
}
