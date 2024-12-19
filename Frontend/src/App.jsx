import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainRegister from "./pages/CaptainRegister";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";
import CaptainHome from "./pages/CaptainHome";
import CaptainLogout from "./pages/CaptainLogout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserRegister />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainRegister />} />
      <Route path="/home" element={<UserProtectedWrapper><Home /></UserProtectedWrapper>} />
      <Route path="/captain-home" element={<CaptainProtectedWrapper><CaptainHome /></CaptainProtectedWrapper>} /> 
      <Route path="/captain-logout" element={<CaptainProtectedWrapper><CaptainLogout /></CaptainProtectedWrapper>} />
      <Route path="/user/logout" element={<UserProtectedWrapper><UserLogout /></UserProtectedWrapper>} />
    </Routes>
  );
}

export default App