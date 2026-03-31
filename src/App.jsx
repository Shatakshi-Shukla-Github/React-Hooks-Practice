import { UserContext } from "./UserContext";
import { Header } from "./Header";
function App() {
  const user = {
    name: "Abraham Lincoln",
    age: 22,
    role: "President",
  };
  return (
    <UserContext value={user}>
      <h1>Dashboard</h1>
      <Header />
    </UserContext>
  );
}

export default App;
