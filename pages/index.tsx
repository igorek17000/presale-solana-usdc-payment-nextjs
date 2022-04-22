import type {NextPage} from 'next'
import Brands from "../components/sections/brands";
import RainFall from "../components/rainfall";

const Home: NextPage = () => (
	<>
		{/*<RainFall/>*/}
		<section>
			<div className="mx-auto max-w-7xl px-2">
				<div className="lg:grid lg:grid-cols-2 lg:gap-12">
					<div
						className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left">
						<div className="pt-0 lg:pt-8">
							<h1 className="mt-4 text-5xl font-fredoka tracking-tight font-medium sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
								<span className="block special text-center lg:text-left uppercase filter-drop-shadow-md text-7xl">
									Join The <span className={"text-yellow-200-"}>$FOXY Army</span> Now! 🚀
								</span>
							</h1>
							<p className="mt-3 text-base font-medium sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
								Foxy is the cutest and the first multi-chain meme-coin! $Foxy will be available on
								Solana, Polygon, Binance Smart Chain, Ethereum and many more.
							</p>
							<div className="mt-8">
								<form action="#">
									<div className="sm:flex sm:justify-center gap-x-4 lg:justify-start">
										<div className="rounded-full lg:mb-0 mb-3">
											<a
												href="#"
												className="w-full flex gap-x-2 items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gray-800 hover:bg-gray-100 hover:text-gray-800 md:py-4 md:text-lg md:px-10">
												Buy $FOXY Token
											</a>
										</div>
										<div className="rounded-full">
											<a
												href="https://read.foxy.army/"
												target={"_blank"}
												rel={"noreferrer"}
												className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full bg-gray-100 hover:bg-gray-800 hover:text-gray-100 md:py-4 md:text-lg md:px-10">
												Read More
											</a>
										</div>
									</div>
									<p className="mt-6 text-center lg:text-left font-medium">
										Know more about us by reading our documentation <a
										className={"https://read.foxy.army/"} target={"_blank"}>here</a>.
									</p>
								</form>
							</div>
						</div>
					</div>
					<div className="pl-6 hidden lg:block">
						<img
							className="w-full cursor-pointer foxy -mt-3 transform-gpu hover:animate-[wiggle_1s_ease-in-out_infinite] filter-drop-shadow-2xl"
							src={"/foxy-hq-3d.png"}
							alt="Foxy"
						/>
					</div>
				</div>
			</div>
		</section>
		<Brands/>
		{/*<section className="bg-gray-900 py-12 lg:pt-20 lg:pb-28">*/}
		{/*	<div className="max-w-7xl mx-auto max-w px-2">*/}
		{/*		<div className="text-center">*/}
		{/*			<h2 className="text-base text-gray-100 font-semibold tracking-wide uppercase">Our Vision and Objectives</h2>*/}
		{/*			<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 uppercase sm:text-4xl">*/}
		{/*				About The Foxy Project*/}
		{/*			</p>*/}
		{/*			<p className="mt-4 max-w-3xl text-xl text-gray-100 lg:mx-auto">*/}
		{/*				Why we decided to launch Foxy, and what is the guideline behind this project.*/}
		{/*			</p>*/}
		{/*		</div>*/}
		{/*		<div className="mt-16 px-3 lg:px-0">*/}
		{/*			<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">*/}
		{/*				<div className="relative">*/}
		{/*					<dt>*/}
		{/*						<div*/}
		{/*							className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-70">*/}
		{/*							<svg className="h-6 w-6" xmlnsw="http://www.w3.org/2000/svg" fill="none"*/}
		{/*								 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
		{/*								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
		{/*									  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>*/}
		{/*							</svg>*/}
		{/*						</div>*/}
		{/*						<p className="ml-16 text-lg leading-6 font-medium text-gray-100">Competitive*/}
		{/*							exchange rates</p>*/}
		{/*					</dt>*/}
		{/*					<dd className="mt-2 ml-16 text-base text-gray-100">*/}
		{/*						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit*/}
		{/*						perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.*/}
		{/*					</dd>*/}
		{/*				</div>*/}
		{/*				<div className="relative">*/}
		{/*					<dt>*/}
		{/*						<div*/}
		{/*							className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-70">*/}
		{/*							<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"*/}
		{/*								 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
		{/*								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
		{/*									  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>*/}
		{/*							</svg>*/}
		{/*						</div>*/}
		{/*						<p className="ml-16 text-lg leading-6 font-medium text-gray-100">No hidden fees</p>*/}
		{/*					</dt>*/}
		{/*					<dd className="mt-2 ml-16 text-base text-gray-100">*/}
		{/*						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit*/}
		{/*						perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.*/}
		{/*					</dd>*/}
		{/*				</div>*/}
		{/*				<div className="relative">*/}
		{/*					<dt>*/}
		{/*						<div*/}
		{/*							className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-70">*/}
		{/*							<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"*/}
		{/*								 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
		{/*								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
		{/*									  d="M13 10V3L4 14h7v7l9-11h-7z"/>*/}
		{/*							</svg>*/}
		{/*						</div>*/}
		{/*						<p className="ml-16 text-lg leading-6 font-medium text-gray-100">Transfers are*/}
		{/*							instant</p>*/}
		{/*					</dt>*/}
		{/*					<dd className="mt-2 ml-16 text-base text-gray-100">*/}
		{/*						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit*/}
		{/*						perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.*/}
		{/*					</dd>*/}
		{/*				</div>*/}
		{/*				<div className="relative">*/}
		{/*					<dt>*/}
		{/*						<div*/}
		{/*							className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-70">*/}
		{/*							<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"*/}
		{/*								 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
		{/*								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
		{/*									  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>*/}
		{/*							</svg>*/}
		{/*						</div>*/}
		{/*						<p className="ml-16 text-lg leading-6 font-medium text-gray-100">Mobile*/}
		{/*							notifications</p>*/}
		{/*					</dt>*/}
		{/*					<dd className="mt-2 ml-16 text-base text-gray-100">*/}
		{/*						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit*/}
		{/*						perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.*/}
		{/*					</dd>*/}
		{/*				</div>*/}
		{/*			</dl>*/}
		{/*		</div>*/}
		{/*	</div>*/}
		{/*</section>*/}
		{/*<section className="bg-foxy">*/}
		{/*	<div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">*/}
		{/*		<h2 className="text-3xl font-extrabold sm:text-4xl">*/}
		{/*			<span className="block">Boost your productivity.</span>*/}
		{/*			<span className="block">Start using Workflow today.</span>*/}
		{/*		</h2>*/}
		{/*		<p className="mt-4 text-lg leading-6 font-medium">*/}
		{/*			Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis*/}
		{/*			vel nulla nec.*/}
		{/*		</p>*/}
		{/*		<a className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">*/}
		{/*			Sign up for free*/}
		{/*		</a>*/}
		{/*	</div>*/}
		{/*</section>*/}
	</>
)

export default Home
