import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
	return (
		<>
			<div className="containe border-2 border-blue-500">
				<Header />
				<Home />
				<Footer />
			</div>
		</>
	);
}

export default App;
