import "./App.css";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/Signup";
import MainRoutes from "./routing/MainRoutes";

function App() {
  return (
    <h1 className="text-3xl font-bold">
      <MainRoutes />
    </h1>
  );
}

export default App;
