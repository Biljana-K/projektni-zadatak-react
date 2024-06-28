import { useContext } from "react";

import LoginContext from "../../store/login-context";

import AddButton from "./AddButton";
import classes from "./PageHeader.module.css";

function PageHeader() {
  const ctx = useContext(LoginContext);

  return (
    <>
      <header className={classes.header}>
        <div>
          <button className={classes.button} onClick={ctx.onLogout}>
            Logout
          </button>
        </div>
        <div>
          <AddButton />
        </div>
      </header>
    </>
  );
}

export default PageHeader;
