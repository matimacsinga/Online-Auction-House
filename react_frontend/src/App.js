import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage'
import ProductList from './pages/ProductList'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AccountInfo from "./pages/AccountInfo";
import { Provider } from "react-redux";
import {store, history} from './utils/Store'
import { ToastContainer } from "react-toastify";
import axios from "axios";
import ProductPage from "./pages/ProductPage";
axios.defaults.baseURL = "http://127.0.0.1:8000";

function App() {
  return (
    <div>
        <PageHeader/>
        <Provider store={store}>
          <BrowserRouter history={history}>
            <ToastContainer hideProgressBar={true} newestOnTop={true} />
            <Routes>
              <Route exact path='/' element={<HomePage/>}/>
              <Route path='/list' element={<ProductList/>}/>
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/info" element={<AccountInfo/>} />
              <Route path="/product/:id" element={<ProductPage/>} />
            </Routes>
          </BrowserRouter>
        </Provider>
        <PageFooter/>
    </div>
  );
}

export default App;
