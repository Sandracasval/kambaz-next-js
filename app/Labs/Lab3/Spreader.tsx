export default function Spreading() {
{/** The spread operator (...) is used to expand, or copy an iterable object 
    or array into another object or array. */}
 const arr1 = [ 1, 2, 3 ];
 //copy the content of arr1, or spread it into arr2
 //so arr2 will contain the contents of arr1 followed by the contents declared in arr2
 const arr2 = [ ...arr1, 4, 5, 6 ];

 //the spread operator can also be applied to objects 
 //obj1 declares an object with three properties a,b, andc
 const obj1 = { a: 1, b: 2, c: 3 };
 //we then spread obj1 onto obj2 so that obj2 ends up with properties of both obj1 and obj2
 const obj2 = { ...obj1, d: 4, e: 5, f: 6 };
 //here since obj1 also has a property called b with a value of 2, there is a collision of 
 //properties in obj3
 //the last declaration overrides any previous values so b ends up being 4
 const obj3 = { ...obj1, b: 4 };
 return (
   <div id="wd-spreading">
     <h2>Spread Operator</h2>
     <h3>Array Spread</h3>
     arr1 = { JSON.stringify(arr1) }  <br />
     arr2 = { JSON.stringify(arr2) }  <br />
     <h3>Object Spread</h3>
     { JSON.stringify(obj1) }         <br />
     { JSON.stringify(obj2) }         <br />
     { JSON.stringify(obj3) }         <br />  <hr />
   </div>);}