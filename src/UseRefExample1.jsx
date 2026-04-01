import { useRef } from "react";
function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.style.backgroundColor = "red";
    paraRef.current.innerText = "Is anyone There? tunu BYE!!!";
    paraRef.current.style.backgroundColor = "red";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:-</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
        <p ref={paraRef}>Hello Shatovic</p>
      </form>
    </div>
  );
}

export default UseRefExample1;
