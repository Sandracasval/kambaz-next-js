export default function ConditionalOutputIfElse() {
  const loggedIn = true;
  {/**this one controls the return, instead of swapping elements inside one return
    It also happens before the rendering of the JSX  */}
  if (loggedIn) {
    return <h2 id="wd-conditional-output-if-else-welcome">Welcome If Else</h2>;
  } else {
    return (
      <h2 id="wd-conditional-output-if-else-login">Please login If Else</h2>
    );
  }
}
