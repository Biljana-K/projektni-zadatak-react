import { Link } from "react-router-dom";

import classes from "./AddButton.module.css";

function AddButton() {
  return (
    <>
      <Link to="product/add">
        <button className={classes.button}>
          <span>+ Add</span>
        </button>
      </Link>
    </>
  );
}

export default AddButton;
