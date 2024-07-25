import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/form/LoginForm";

const Auth = () => {
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (isLoading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata oluştu!</div>;

  return <LoginForm />;
};

export default Auth;
