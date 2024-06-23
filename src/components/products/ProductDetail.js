import classes from "./ProductDetail.module.css";

function ProductDetail(props) {
  return (
    <>
      <ul className={classes.content}>
        <li>Title: {props.title}</li>
        <li>Description: {props.description}</li>
        <li>Price: ${props.price}</li>
        <li>Discount: {props.discountPercentage}%</li>
        <li>Waranty: {props.warantyInformation}</li>
        <li>Shipping: {props.shippingInformation}</li>
        <li>Product Availability: {props.availabilityStatus}</li>
      </ul>
    </>
  );
}

export default ProductDetail;
