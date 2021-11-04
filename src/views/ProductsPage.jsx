import PageContainer from "../components/PageContainer/PageContainer";
import Navbar from "../components/Navbar/Navbar";
import Filters from "../components/Filters/Filters";
import Products from "../components/Products/Products";
import CartBox from "../components/CartBox/CartBox";

function ProductsPage() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Filters />
        <Products />
        <CartBox />
      </PageContainer>
    </>
  );
}

export default ProductsPage;
