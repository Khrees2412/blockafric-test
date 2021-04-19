import BottomNav from "./components/BottomNav";
import Card from "./components/Card";
import Exchange from "./components/Exchange";
import Navbar from "./components/Navbar";
import Transactions from "./components/Transactions";

export default function App() {
	return (
		<>
			<div className="bg-white p-3">
				<Navbar />
				<Card />
			</div>
			<div className="bg-gray-200 text-black ">
				<Exchange />
				<Transactions />
			</div>
			<BottomNav />
		</>
	);
}
