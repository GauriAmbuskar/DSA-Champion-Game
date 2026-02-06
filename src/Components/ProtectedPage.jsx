import LoginRequiredModel from "./LoginRequiredModel.jsx";

const ProtectedPage = ({ children }) => {
  const user = localStorage.getItem("dsa_logged_in");

  if (!user) {
    return <LoginRequiredModel />;
  }

  return children;
};

export default ProtectedPage;
