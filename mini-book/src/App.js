import React, { Component } from "react";
import classes from "./App.module.css";

import ProductPreview from "./ProductPreview/ProductPreview";
import ProductDetails from "./ProductDetails/ProductDetails";
import TopBar from "./TopBar/TopBar";
import ProductData from "./Utils/ProductData";
class App extends Component {
  state = {
    productData: ProductData,
    currentImagePreviewPos: 0,
    featurePos: 0,
    showHeartBeat: true,
  };
  onColorOptionClicked = (pos) => {
    this.setState({ currentImagePreviewPos: pos });
  };
  onButtonClicked = () => {
    this.setState({
      showHeartBeat: false,
    });
  };
  render() {
    return (
      <div className="App">
        <TopBar />

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview
              currentImagePreview={
                this.state.productData.colorOptions[
                  this.state.currentImagePreviewPos
                ].imageUrl
              }
              showHeartBeat={this.state.showHeartBeat}
            />
          </div>
          <div className={classes.ProductData}>
            <ProductDetails
              data={this.state.productData}
              onColorOptionClicked={this.onColorOptionClicked}
              currentImagePreviewPos={this.state.currentImagePreviewPos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
