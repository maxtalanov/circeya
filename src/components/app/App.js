import './App.scss';
import Header from "../header/header";
import Footer from "../footer/footer";
import NavBar from "../ui/Navbar/NavBar";
import TabLorem from "../TabLorem/TabLorem";
import TabIpsum from "../TabIpsum/TabIpsum";

function App() {

    return (
        <div className="App">
            <Header/>
            {/*<main className="app-content">*/}
            {/*    <NavBar />*/}
            {/*    <TabLorem />*/}
            {/*</main>*/}
            <main className="app-content">
                <NavBar />
                <TabIpsum />
            </main>
            <Footer/>
        </div>
    );
}

export default App;
