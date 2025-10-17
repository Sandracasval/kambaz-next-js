function add(a: number, b: number) {
  return a + b;
}
export default function LegacyFunctions() {
  const twoPlusFour = add(2, 4);
  console.log(twoPlusFour);
  {/**YOU CAN ALSO RENDER THE RESULT OF FUNCTIONS! */}
  {/** ALWAYS PUT VARIABLES AND DUNCTION CALLS INTO BRACKETS */}
  return (
    <div id="wd-legacy-functions">
      <h4>Functions</h4>
      <h5>Legacy ES5 functions</h5>
      twoPlusFour = {twoPlusFour} <br />
      add(2, 4) = {add(2, 4)} <hr />
    </div>
  );
}
