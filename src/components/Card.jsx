export default function Card() {
	return (
		<section className="bg-pink-500 text-white flex justify-around p-8 -mx-1 rounded-2xl shadow-2xl  divide-x divide-gray-200 divide-solid">
			<div>
				<div className="bg-white p-0.5 text-center rounded-3xl">
					<p className="py-1 -mx-2 font-bold text-pink-500">AFYA</p>
				</div>
				<p>143.00</p>
				<p>balance</p>
			</div>
			<div className="pl-10">
				<div className="bg-white p-0.5 text-center rounded-3xl">
					<p className="py-1 -mx-2 font-bold text-blue-500">ZAR</p>
				</div>

				<p>R21.00</p>
				<p>balance</p>
			</div>
		</section>
	);
}
