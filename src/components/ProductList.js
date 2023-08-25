import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../features/api/apiSlice";

export const ProductList = () => {
  const { data } = useGetAllProductsQuery();
  const { data: singleProductData } = useGetProductQuery("iphone");
  console.log(data);
  console.log(singleProductData);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {singleProductData.products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail}></img>
            <span>{product.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
