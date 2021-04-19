import House from "../icons/home.svg";
import Wallet from "../icons/wallet.svg";
import Activity from "../icons/activity.svg";
import Earn from "../icons/earn.svg";
import Market from "../icons/market.svg";

export default function Footer() {
	return (
		<footer className="">
			<div className="flex justify-around flex-shrink-0 text-red-400 p-2 mx-2">
				<button>
					<img
						src={House}
						alt="home"
						className="w-10 text-pink-600"
					/>
				</button>
				<button>
					<img
						src={Activity}
						alt="activity report"
						className="w-10 text-pink-600"
					/>
				</button>
				<button>
					<img
						src={Wallet}
						alt="your wallet"
						className="w-10 text-pink-600"
					/>
				</button>
				<button>
					<img
						src={Market}
						alt="market"
						className="w-10 text-pink-600"
					/>
				</button>
				<button>
					<img
						src={Earn}
						alt="earn gift"
						className="w-10 text-pink-600"
					/>
				</button>
			</div>
		</footer>
	);
}
