import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "My First Book",
    price: 6,
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    title: "My Second Book",
    price: 5,
    description: "The second book I ever wrote",
  },
  {
    id: "p3",
    title: "My Third Book",
    price: 9,
    description: "The third book I ever wrote",
  },
];

const Products = (props) => {
  const products = DUMMY_PRODUCTS.map((product) => {
    return <ProductItem key={product.id} productData={product} />;
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{products}</ul>
    </section>
  );
};

export default Products;
