import AddButton from "./AddButton";
import classes from "./PageHeader.module.css";

function PageHeader() {
  return (
    <>
      <nav className={classes.header}>
        <ul>
          <li>
            <AddButton />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default PageHeader;
