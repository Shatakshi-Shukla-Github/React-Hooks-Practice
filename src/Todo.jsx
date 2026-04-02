import { useState, useEffect, useRef } from "react";
function Todo() {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 3000);
      });
    return () => {
      isMounted === false;
    };
  }, [isMounted]);
  return loading ? <h3>Loading...</h3> : <h3>{todo.title}</h3>;
}

export default Todo;
