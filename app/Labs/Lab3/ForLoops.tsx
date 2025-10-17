export default function ForLoops() {
  /* eslint-disable prefer-const */
  let stringArray1 = ["string1", "string3"];
  let stringArray2 = [];
  /* eslint-enable prefer-const */
  {/**We can operate on each array value by iterating 
    over them in a forloop */}
// start at 0, for the number of elements, and increase counter everytime 
//first gets the current string, then uppercases it, and adds it to a new arrat
  for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    stringArray2.push(string1.toUpperCase());
  }
  return (
    <div id="wd-for-loops">
      <h4>Looping through arrays</h4>
      stringArray2 = {stringArray2} <hr />
    </div>
  );
}
