import { useSelector } from "react-redux";

import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthenticated = useSelector((state) => {
    return state.auth.isAuthenticated;
  });

  let content = <Auth />;
  if (isAuthenticated) {
    content = <UserProfile />;
  }

  return (
    <>
      <Header />
      {content}
      <Counter />
    </>
  );
}

export default App;
