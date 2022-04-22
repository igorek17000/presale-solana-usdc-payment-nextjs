import {NextPage} from "next";

const Store: NextPage = () => {
	return (
		<section>
			<div className="max-w-7xl mx-auto px-2">
				<div className="text-center">
					<h2 className="text-base font-semibold text-white tracking-wide uppercase">Our Official</h2>
					<h1 className="mt-1 text-7xl font-fredoka filter drop-shadow-lg font-medium text-white uppercase">
						Foxy Store
					</h1>
					<p className="max-w-xl mt-2 mx-auto filter drop-shadow-lg font-bold text-3xl text-gray-50">
						Official products, goodies, mugs etc.
					</p>
				</div>
			</div>
			<div className="max-w-7xl mx-auto py-20 px-4 overflow-hidden sm:py-20 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
					<a href="https://www.redbubble.com/fr/i/sticker/Foxy-par-foxyarmy/100535091.O9UDB" target="_blank"
					   className="group text-sm" rel="noreferrer">
						<div
							className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
							<img
								src="https://ih1.redbubble.net/image.3193378246.5091/tsss,small,product_square,1000x1000.jpg"
								alt="White fabric pouch with white zipper, black zipper pull, and black elastic loop."
								className="w-full h-full object-center object-cover" />
						</div>
						<h3 className="mt-4 text-lg font-medium text-gray-900">
							Foxy Sticker
						</h3>
						<p className="text-gray-700 text-base italic">
							Decorate windows, personalize water bottles, or stick ‘em wherever
						</p>
						<p className="mt-2 font-medium text-gray-900">
							$3.68
						</p>
					</a>

					<a href="https://www.redbubble.com/i/magnet/foxy-by-foxyarmy/100535091.TBCTK" target="_blank"
					   className="group text-sm" rel="noreferrer">
						<div
							className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
							<img
								src="https://ih1.redbubble.net/image.3193378246.5091/mo,small,fridge_close,square,1000x1000.2.jpg"
								alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
								className="w-full h-full object-center object-cover" />
						</div>
						<h3 className="mt-4 text-lg font-medium text-gray-900">
							Foxy Magnet
						</h3>
						<p className="text-gray-700 text-base italic">
							Die-cut magnets add a touch of easily switchable flair to your fridge, locker, or file
							cabinet
						</p>
						<p className="mt-2 font-medium text-gray-900">
							$8.64
						</p>
					</a>

					<a href="https://www.redbubble.com/i/pin/foxy-by-foxyarmy/100535091.NP9QY" target="_blank"
					   className="group text-sm" rel="noreferrer">
						<div
							className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
							<img
								src="https://ih1.redbubble.net/image.3193378258.5091/ur,pin_small_front,square,1000x1000.jpg"
								alt="Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents."
								className="w-full h-full object-center object-cover" />
						</div>
						<h3 className="mt-4 text-lg font-medium text-gray-900">
							Foxy Pin
						</h3>
						<p className="text-gray-700 text-base italic">
							Round pinback buttons for instant awesome, just about anywhere.
						</p>
						<p className="mt-2 font-medium text-gray-900">
							$3.98
						</p>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Store;