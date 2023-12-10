import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const colorOptions = props.data.images.map((item, pos) => (
    <img
      key={pos}
      src={item.url}
      alt={item.color}
      className={
        pos === props.currentPreviewImagePos ? classes.activeColor : ""
      }
      onClick={() => props.onColorOptionClick(pos)}
    />
  ));
  const colorName = (
    <p className={classes.features}>
      <span>Select Color : </span>
      {props.data.images[props.currentPreviewImagePos].color}
    </p>
  );
  const features = props.data.features.map((item, pos) => (
    <button
      onClick={() => props.onFeatureItemClick(pos)}
      key={pos}
      className={pos === props.currentSelectedFeature ? classes.active : ""}
    >
      {item}
    </button>
  ));
  return (
    <section>
      <h1>{props.data.title}</h1>
      <p>{props.data.desc}</p>
      {colorName}
      <div className={classes.colorWrapper}>{colorOptions}</div>
      <p className={classes.features}>
        <span> Features </span>
      </p>
      <div className={classes.btnWrapper}>{features}</div>
      <button
        onClick={() =>
          alert(
            `Your order of ${
              props.data.images[props.currentPreviewImagePos].color
            } watch has successfully placed`
          )
        }
      >
        Buy now
      </button>
    </section>
  );
};

export default ProductDetails;
