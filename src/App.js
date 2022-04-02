import Article  from './components/Article';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

export default function App(){
    return(
        <div className='App'>
            <Header />
            <Nav />
            <Article />
            {/* <Footer /> */}
        </div>
    )
}