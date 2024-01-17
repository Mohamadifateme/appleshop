// import logo from './logo.svg';
import './App.scss';
import { Home } from './pages/home/home.component.jsx';
import {Shop} from './pages/shop/shop.component.jsx';
import {Gallery} from './pages/gallery/gallery.component.jsx';
import {Contact} from './pages/contact/contact.component.jsx';
import {About} from './pages/about/about.component.jsx';
import {BrowserRouter,Route,Routes} from  'react-router-dom';
import{Header} from './components/header/header.component.jsx';
import {BasketProvider} from './provider/basketProvider/basketProvider.component.jsx';


function App() {
  return (
    

    <BrowserRouter basename="/">
      <BasketProvider>
      <Header />
      
      <Routes>
        <Route  exact path="/" element={<Home/>}/>
              <Route path="/shop" element={<Shop/>}/>
        <Route path="/shop/:productId" element={<Shop/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>

      </Routes>
      </BasketProvider>
    </BrowserRouter>
  
  );
  
  }

export default App;
