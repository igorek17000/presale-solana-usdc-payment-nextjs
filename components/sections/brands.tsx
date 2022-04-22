const Brands = () => (
	<section>
		<div className="max-w-7xl mx-auto px-2 pt-12 lg:py-6 pb-12">
			<p className="text-center text-sm font-semibold uppercase text-gray-700 tracking-wide">
				{/*Trusted by over 5 very average small businesses*/}
				Here are all our partners, and relevant blockchains.
			</p>
			<div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 items-center lg:grid-cols-5">
				<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
					<img className="h-10" src={"/static/CoinMarketCap.svg"} alt="CoinMarketCap"/>
				</div>
				<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
					<img className="h-7" src={"/static/Solana.svg"} alt="Solana"/>
				</div>
				<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
					<img className="h-10" src={"/static/BinanceSmartChain.svg"} alt="BinanceSmartChain"/>
				</div>
				<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
					<img className="h-11" src={"/static/CoinGecko.svg"} alt="CoinGecko"/>
				</div>
				<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
					<img className="h-10" src={"/static/Polygon.svg"} alt="Polygon"/>
				</div>
			</div>
		</div>
	</section>
)

export default Brands;