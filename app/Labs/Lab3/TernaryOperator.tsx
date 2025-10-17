export default function TernanyOperator() {
  /*eslint-disable prefer-const */
  let loggedIn = true;
  /*eslint-enable prefer-const */
  return (
    <div id="wd-ternary-operator">
      <h4>Logged In</h4>
      {/**if logged in is true, displayed welcome, otherwise display please login */}
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>} <hr />
    </div>
  );
}
