import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import BidItems from './BidItems';
import Footer from "./Footer";
import { ToastContainer} from 'react-toastify';


function App() {

    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>

            <BidItems ></BidItems>
            
         <Footer></Footer>
         <ToastContainer />
         

        </>
    );
}

export default App;
