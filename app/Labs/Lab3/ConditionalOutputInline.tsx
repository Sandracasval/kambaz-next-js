export default function ConditionalOutputInline() {
  const loggedIn = false;
  return (
    <div id="wd-conditional-output-inline">
      {/** Only render it if the condition is true
       * the first line doesnt render because loggedin is set to false
       * the please login inline does render because we used not to turn it into true
       */}
      {loggedIn && <h2>Welcome Inline</h2>}
      {!loggedIn && <h2>Please login Inline</h2>}
      <hr />
    </div>
  );
}
