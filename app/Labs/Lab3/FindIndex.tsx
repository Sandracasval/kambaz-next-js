export default function FindIndex() {
  /* eslint-disable prefer-const */
  let numberArray1 = [1, 2, 4, 5, 6];
  let stringArray1 = ["string1", "string3"];

  /* eslint-enable prefer-const */
  //find the index of four in the list
  const fourIndex = numberArray1.findIndex((a) => a === 4);
  const string3Index = stringArray1.findIndex((a) => a === "string3");
  return (
    <div id="wd-find-index-function">
      <h4>FindIndex Function</h4>
      fourIndex = {fourIndex} <br />
      string3Index = {string3Index} <hr />
    </div>
    //3.4.7 page 92
  );
}
