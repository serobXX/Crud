import "./App.css";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    if (!auth && !location.pathname.startsWith("/auth")) {
      navigate("/auth");
    }
    {
      navigate("/main");
    }
  }, [auth]);

  return (
    <div className="bg-black w-full h-screen text-white">
      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/auth" element={<Login />} />

        {/* <Route path="/auth" element={<Auth />}>
          <Route path="" element={<Navigate to="/auth/signin/" />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="reset-password-token" element={<ResetPasswordToken />} />
          <Route path="reset-password-new" element={<ResetPasswordNew />} />
          <Route path="invite/:id" element={<CreatePassword />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signout" element={<SignOut />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
