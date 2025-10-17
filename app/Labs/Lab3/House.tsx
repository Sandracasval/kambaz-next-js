export default function House() {
    //MULTIPLE VALUES OF VARIOUS DATATYPES CAN BE COMBINED TO CREATE COMPLEX DATA TYPES
    //CALED OBJECTS
    //FOR EXAMPLE HOUSE IS AN OBJECT!
    //the house vraiable is assigned an object literal declared within open and closing 
    //curly brackets. 
    //objects contain pairs of PROPERTIES : VALUES separated by common 
    //Values can be of any data type
    //property is bedroom, value is 4, type is number 
    //adress, another objecy, type is nested object
    //YOU CAN ACCESS THEM LIKE THIS HOUSE.BEDROOMS HOUSE.OWNERS[O], HOUSE.ADDRESS.CITY
  const house = {
    bedrooms: 4,      bathrooms: 2.5,
    squareFeet: 2000,
    address: {
      street: "Via Roma", city: "Roma", state: "RM", zip: "00100",  country: "Italy", },
    owners: ["Alice", "Bob"],
  };
  // we can also display JSON data to confirm it is what we expect
  //this console.log statement prints the house JSON object in the HOUSE component
  console.log(house);
  return (
    <div id="wd-house">
      <h4>House</h4>
      <h5>bedrooms</h5>      {house.bedrooms}
      <h5>bathrooms</h5>     {house.bathrooms}
      <h5>Data</h5>
      <pre>{JSON.stringify(house, null, 2)}</pre>
      <hr />
    </div>
);}
