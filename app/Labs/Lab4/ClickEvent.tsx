"use client";
//function declared to handle the even t
//use client allows interaction with the browser
//javascript files tagged with use client do not run on the server but instead on the broswer

const hello = () => {
  alert("Hello World!");
};
//Yyou are defining a funciton that expected one parameter called good
//call it later and supply the value for good
const lifeIs = (good: string) => {
  alert(`Life is ${good}`);
};
export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      {/*** when this button is clicked running the hello function */}
      <button onClick={hello} id="wd-hello-world-click">
        Hello World!
      </button>
      <button onClick={() => lifeIs("Good!")} id="wd-life-is-good-click">
        Life is Good!
      </button>
      {/**this calls hello first then lifeis after you click ok */}
      <button
        onClick={() => {
          hello();
          lifeIs("Great!");
        }}
        id="wd-life-is-great-click"
      >
        Life is Great!
      </button>
      <hr />
    </div>
  );
}
