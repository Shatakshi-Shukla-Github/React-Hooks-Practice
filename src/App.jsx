import { Header } from "./Header";
import { UserContextProvider } from "./UserContextProvider";
function App() {
  return (
    <UserContextProvider>
      <h1>Dashboard</h1>
      <Header />
    </UserContextProvider>
  );
}

export default App;
