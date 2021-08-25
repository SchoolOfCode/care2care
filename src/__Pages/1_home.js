import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <LoginButton />;
  } else {
      return <LogoutButton />
  }
};

export default Home;
