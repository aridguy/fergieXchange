import { useNavigate } from "react-router-dom";

export const HandleLogoutFunction = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return handleLogout;
};
