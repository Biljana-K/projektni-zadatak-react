import { Link, useSubmit } from "react-router-dom";

import { DeleteIcon, EditIcon } from "./ActionIcons";
import Swal from "sweetalert2";

function ProductItem(props) {
  const submit = useSubmit();

  const deleteProductHandler = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your file was not deleted.",
            icon: "error",
          });
        }
      });

    const proceed = swalWithBootstrapButtons;

    if (proceed) {
      submit(null, { method: "delete" });
    }
  };

  return (
    <tr>
      <td>#{props.id}</td>
      <td>
        <Link to={`product/${props.id}`}> {props.title}</Link>
      </td>
      <td>{props.description}</td>
      <td>{props.brand}</td>
      <td>${props.price}</td>
      <td style={{ textTransform: "capitalize" }}>{props.category}</td>
      <td>{props.stock}</td>
      <td>
        <Link to={`product/edit/${props.id}`}>
          <EditIcon />
        </Link>
        <DeleteIcon onClick={deleteProductHandler} />
      </td>
    </tr>
  );
}

export default ProductItem;
