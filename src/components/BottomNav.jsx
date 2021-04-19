import House from "../icons/house.png";

export default function BottomNav() {
	return (
		<div className=" absolute bottom-0 ">
			<div className="flex justify-around text-red-400 p-2 mx-2">
				<div>
					<img src={House} alt="home" className="w-10 bg-pink-600" />
				</div>
				<div>Activity</div>
				<div>Wallet</div>
				<div>Market</div>
				<div>Earn</div>
			</div>
		</div>
	);
}
