import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// SCSS
import './App.scss';

// Layout
import Header from './components/layout/Header';

// Components
import Home from './components/pages/Home';
import About from './components/pages/About';
import Aboutadmin from './components/admin/Aboutadmin';
import Products from './components/pages/Products';
import Product from './components/pages/Product';
import ProductAdmin from './components/admin/ProductAdmin';
import ProductCreate from './components/admin/ProductCreate';
import ProductEdit from './components/admin/ProductEdit';


const App = () => {
    return (
        <div className="App">
            <Router>
            <header>
                <Header />
            </header>
                <main className="container-fluid my-4">
                    <Switch>
                        <Route exact path="/"> <Home /> </Route>
                        <Route path="/about"> <About /> </Route>
                        <Route path="/products"> <Products /> </Route>
                        <Route path="/product/:id" component={Product} />
                        { /* ADMIN */ }
                        <Route path="/aboutadmin"> <Aboutadmin /> </Route>
                        <Route path="/productadmin"> <ProductAdmin /> </Route>
                        <Route path="/createproduct"> <ProductCreate /> </Route>
                        <Route path="/editproduct/:id" component={ProductEdit} />
                    </Switch>
                </main>
            </Router>
        </div>
    );
}

export default App;
