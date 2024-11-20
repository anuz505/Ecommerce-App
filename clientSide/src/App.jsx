import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
function App() {
  return (
    <>
      <Routes></Routes>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}></Route>
      </Routes>
    </>
  );
}

export default App;
