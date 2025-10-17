export default function FilterFunction() {
// eslint-disable-next-line prefer-const
  let numberArray1 = [1, 2, 4, 5, 6];
  //FILTER FUNCTION LOOKS FOR ELEMENTS THAT MEET A CERTAIN CRITERIA AND 
  //ADD THEM INTO A NEE ARRAY
  const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
  const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
  const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);
  return (
    <div id="wd-filter-function">
      <h4>Filter Function</h4>
      numbersGreaterThan2 = {numbersGreaterThan2}  <br />
      evenNumbers = {evenNumbers}    <br />
      oddNumbers = {oddNumbers}      <hr />
    </div>
);}
