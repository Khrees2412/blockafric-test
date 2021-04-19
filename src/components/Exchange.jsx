export default function Exchange() {
	return (
		<section className="p-3">
			<h3 className="text-blue-500 my-2">Select Currency:</h3>
			<div className="bg-white p-1">
				<select className="bg-gray-200 p-1">
					<option>AFYA</option>
					<option>ZAR</option>
				</select>
				<input type="text" className="bg-gray-200 p-1" />

				<div className="flex items-center">
					<button className="bg-blue-600 text-white p-3 rounded-md m-3">
						SEND
					</button>
					<button className="bg-blue-600 text-white p-3 rounded-md m-3">
						RECEIVE
					</button>
				</div>
			</div>
		</section>
	);
}
