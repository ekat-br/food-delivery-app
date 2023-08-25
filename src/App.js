import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { Provider } from "react-redux";
import ProductList from "./components/ProductList";
import store from "./store";
import { productsApi } from "./features/api/apiSlice";

function App() {
  return (
    <>
      <Provider store={store}>
        <ApiProvider api={productsApi}>
          <ProductList />
        </ApiProvider>
      </Provider>
    </>
  );
}

export default App;
