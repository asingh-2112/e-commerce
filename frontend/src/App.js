import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./customer/pages/home/HomePage";
import Footer from "./customer/components/footer/Footer";
import Product from "./customer/components/product/product/Product";
import ProductDeatils from "./customer/components/productDetails/ProductDetails";
import RatingSystem from "./customer/components/temporary/RatingSyste,";
import Cart from "./customer/components/cart/Cart";
import Checkout from "./customer/components/checkout/Checkout";
import Order from "./customer/components/order/Order";
import OrderDetails from "./customer/components/order/OrderDetails";

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage/> */}
        {/* <Product /> */}
        {/* <ProductDeatils/> */}
        {/* <RatingSystem/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        <OrderDetails/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
