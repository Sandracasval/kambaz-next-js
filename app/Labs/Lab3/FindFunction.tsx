export default function FindFunction() {
  /* eslint-disable prefer-const */
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2", "string3"];
  /* eslint-enable prefer-const */
  // find function can search for an element and return the element if it finds it
  //FIND takes a function as afunctio argument
  //WHEN THE FUNCTION RETURNS TRUE THE FUNCTION STOPS BECAUSE IT FOUND WHAT IT WAS LOOKING FOR
  const four = numberArray1.find((a) => a === 4);
  const string3 = stringArray1.find((a) => a === "string3");
  return (
    <div id="wd-find-function">
      <h4>Find Function</h4>
      four = {four} <br />
      string3 = {string3} <hr />
    </div>
  );
}
