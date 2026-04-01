import { useRef, useState, useEffect } from "react";
function UseRefExample2() {
  const renders = useRef(1);
  const prevName = useRef("");
  const [name, setName] = useState("");
  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);
  return (
    <div>
      <h1>Renders:- {renders.current}</h1>
      <h1>Previous Character:- {prevName.current}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="form-control mb-3"
      />
    </div>
  );
}

export default UseRefExample2;

// React renders your component by calling your component and the return value is output to the DOM.
// On this first render then renders.current is 1 so that is what you see in the UI.

// After this render your useEffect runs and increments renders.current by 1 so now it is 2, but the component doesn't re render when you change your ref so you still see 1 in the UI.

// After entering the first character in the input you tell React to schedule a re render of your component with new state, let's say 'R' was entered in the input.

// So React calls/invokes your function component again with new state available and now remember that renders.current was 2 so that is what shows in the UI on this render. But immediately after the render useEffect runs and increments renders.current again by 1, so it is now actually 3. You will still see 2 the previous value of the ref in the UI because changing the ref's value doesn't re render the component.
