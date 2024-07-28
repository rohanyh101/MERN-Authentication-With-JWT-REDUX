import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light text-center p-3">
      <div className="container">
        <h1 className="display-4 mb-4 text-danger">Oops!</h1>
        <p className="lead mb-3">Sorry, an unexpected error has occurred.</p>
        <p className="font-italic text-muted">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
