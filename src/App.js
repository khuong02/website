import "./App.css";
import { LoadingProvider } from "./context/Loading";
import { UserProvider } from "./context/UserContext";
import Container from "./container/Container";

function App() {
  return (
    <LoadingProvider>
      <UserProvider>
        <div className="App">
          <Container />
        </div>
      </UserProvider>
    </LoadingProvider>
  );
}

export default App;
