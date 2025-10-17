export default function IfElse() {
  /* eslint-disable prefer-const */
  let true1 = true,
    false1 = false;
  /* estlint-enable prefer-const */
  return (
    <div id="wd-if-else">
      {/**The true1 paragraoh is only rendered if true1 is true */}
      {/**The ":" and the "?" can be used ot render one of two options
       * based on  the value of a boolean expression
       */}
      <h4>If Else</h4>
      {/**if teh condition before the && is true, react shows the element after it */}
      {true1 && <p>true1</p>}
      {/**because this is using not equal to its true so react will render false1 */}
      {/**if it wasnt true it would also show false1 */}
      {/**condition ? expressionIfTrue : expressionIffalse */}
      {!false1 ? <p>!false1</p> : <p>false1</p>} <hr />
    </div>
  );
}
