import React, { Component } from "react";
import "./App.css";
import ProductPreview from "./productPreview/ProductPreview";
import ProductDetails from "./productDetails/ProductDetails";
import ProductData from "./productData/ProductData";
import TopBar from "./headerAndFooter/TopBar";
import Footer from "./headerAndFooter/Footer";

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
    showHeartBeat: false,
  };

  onColorOptionClick = (pos) => {
    this.setState({ currentPreviewImagePos: pos });
  };

  onFeatureItemClick = (pos) => {
    this.setState({ currentSelectedFeature: pos });
    let updateValue = false;
    if (pos === 1) updateValue = true;
    this.setState({ showHeartBeat: updateValue });
  };

  render() {
    return (
      <div className="container">
        <TopBar />
        <main>
          <ProductPreview
            currentPreviewImage={
              this.state.productData.images[this.state.currentPreviewImagePos]
                .url
            }
            showHeartBeat={this.state.showHeartBeat}
            currentPreviewImagePos={this.state.currentPreviewImagePos}
          />
          <ProductDetails
            data={this.state.productData}
            onColorOptionClick={this.onColorOptionClick}
            currentPreviewImagePos={this.state.currentPreviewImagePos}
            onFeatureItemClick={this.onFeatureItemClick}
            currentSelectedFeature={this.state.currentSelectedFeature}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
