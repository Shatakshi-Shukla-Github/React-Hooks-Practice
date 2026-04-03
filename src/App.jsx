// import { Header } from "./Header";
import { useState } from "react";
import UseRefExample1 from "./UseRefExample1";
import UseRefExample2 from "./UseRefExample2";
import UseRefExample3 from "./UseRefExample3";
import UseMemoExample from "./UseMemoExample";

// import { UserContextProvider } from "./UserContextProvider";
function App() {
  return (
    <UseMemoExample />
    // <UserContextProvider>
    //   <h1>Dashboard</h1>
    //   <Header />
    // </UserContextProvider>
  );
}

export default App;
