import { useRouteError } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const routeError = useRouteError();
  console.log("routeError: ", routeError);
  return (
    <>
      <MainNavigation />
      <main id="error-content">
        <h1>An error occured!</h1>
        <p>{routeError.message}</p>
      </main>
    </>
  );
}

export default ErrorPage;
