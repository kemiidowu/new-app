import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ROUTES } from "./helpers/routes";
import Login from "./pages/Login/Login";
import { Deliveries } from "./pages/Deliveries/Deliveries";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.DELIVERIES} element={<Deliveries />} />
      </Routes>
    </Router>
  );
}

export default App;
