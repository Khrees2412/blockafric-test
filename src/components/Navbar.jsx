import Alarm from "../icons/alarm.svg";
import Avatar from "../icons/avatar.svg";

export default function Navbar() {
	return (
		<nav className="flex justify-between p-2 ">
			<h2 className="text-5xl text-pink-400 font-bold">ribbon</h2>
			<div className="flex justify-around  mx-2">
				<img src={Avatar} alt="avatar" className="mr-1 w-10" />
				<img src={Alarm} alt="alarm" className="mr-1 w-10" />
			</div>
		</nav>
	);
}
