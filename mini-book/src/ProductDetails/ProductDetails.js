import React from "react";
import classes from "./ProductDetails.module.css";

// import ProductData from "../ProductData";
function ProductDetails(props) {
  // console.log(props.data);
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [classes.ProductImage];
    if (pos === props.currentImagePreviewPos) {
      classArr.push(classes.SelectedProductImage);
    }
    return (
      <img
        onClick={() => props.onColorOptionClicked(pos)}
        key={pos}
        className={classArr.join(" ")}
        src={item.imageUrl}
        alt={item.styleName}
      ></img>
    );
  });

  const featureList = props.data.featureList.map((item, pos) => {
    // return console.log(item);
    const buttonArr = [classes.FeatureItem];
    if (pos === 1) {
      buttonArr.push(classes.SelectedFeatureItem);
    }
    return (
      <button
        onClick={pos.onButtonClicked}
        key={pos}
        className={buttonArr.join(" ")}
      >
        {item}
      </button>
    );
  });

  return (
    <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}>{props.data.title}</h1>
      <h1 className={classes.ProductDescription}>{props.data.description}</h1>
      <h3 className="classes.SectionHeading">Select Color</h3>
      <div>{colorOptions}</div>
      <h3 className="classes.SectionHeading">Features </h3>
      <div>{featureList}</div>
      <div>
        <button className={classes.PrimaryButton}>Buy Now</button>
      </div>
    </div>
  );
}

export default ProductDetails;
