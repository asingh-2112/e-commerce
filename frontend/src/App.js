import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/home/HomePage';
import Footer from './customer/components/footer/Footer';

function App() {
  return (
    <div className="">
      <Navigation/>
    <div>
      <HomePage/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
