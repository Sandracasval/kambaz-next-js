export default function Destructing() {
  const person = { name: "John", age: 25 };
  //THIS DECONSTRUCTS
  const { name, age } = person;
  // const name = person.name
  // const age = person.age
  const numbers = ["one", "two", "three"];
  //THIS ALSO DOES THE DECONSTRUCTING
  const [first, second, third] = numbers;
  //the curly brackets around contsnats name and age destruct the object perso n
  //and assign the properties of the same name into new cotant
  //object destrucing is based on names
  //arrat destructing is based on positions of the times
  return (
    <div id="wd-destructing">
      <h2>Destructing</h2>
      <h3>Object Destructing</h3>
      <span>{'const { name, age } = { name: "John", age: 25 }'}</span>
      <br />
      <br />
      name = {name}
      <br />
      age = {age}
      <hr />
      <h3>Array Destructing</h3>
      <span>{'const [first, second, third] = ["one","two","three"]'}</span>
      <br />
      <br />
      first = {first}
      <br />
      second = {second}
      <br />
      third = {third}
      <hr />
    </div>
  );
}
