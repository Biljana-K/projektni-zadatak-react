import { Link } from "react-router-dom";

import classes from "./Error.module.css";

function ErrorPage() {
  return (
    <>
      <main className={classes["error-content"]}>
        <h1>Oh, no! An Error!</h1>
        <p>Looked, but could not find this page!</p>
        <div>
          <Link to={"/"}>Back</Link>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
