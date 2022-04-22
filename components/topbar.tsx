import {DocumentTextIcon} from "@heroicons/react/outline";

const TopBar = () => {
	return (
		<nav className="sticky-top-0 z-30 bg-gray-800 text-white bg-gradient-primary">
			<div
				className="max-w-7xl p-2 mx-auto flex whitespace-nowrap justify-between justify-center gap-x-4">
				<a href="https://solscan.io/token/Foxy7Df6VEc1dUCr1ExZfRAqqHaifNFDd8ccvAs59DNr" target="_blank"
				   className="flex justify-center truncate items-center gap-x-1 font-bold text-sm   rounded-full  py-1" rel="noreferrer">
					{/*<svg xmlns="http://www.w3.org/2000/svg" className="h-4" fill="none" viewBox="0 0 24 24"*/}
					{/*	 stroke="currentColor">*/}
					{/*	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>*/}
					{/*</svg>*/}
					<DocumentTextIcon className={"w-5"} />
					Official $FOXY Contract
					<span className="truncate">Foxy7Df6VEc1dUCr1ExZfRAqqHaifNFDd8ccvAs59DNr</span>
				</a>
				<div className="flex gap-x-2">
					<a href="https://t.me/foxyarmy" target="_blank"
					   className="flex justify-center items-center gap-2 font-bold text-sm rounded-full px-4 py-1" rel="noreferrer">
						<svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
							<path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
						</svg>
						<span className="hidden lg:block">foxyarmy</span>
					</a>
					<a href="https://twitter.com/joinfoxyarmy" target="_blank"
					   className="flex justify-center items-center gap-2 font-bold text-sm rounded-full px-4 py-1" rel="noreferrer">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 24 24" fill="white">
							<path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"/>
						</svg>
						<span className="hidden lg:block">joinfoxyarmy</span>
					</a>
					<a href="https://discord.gg/9Yph9njFNF" target="_blank"
					   className="flex justify-center items-center gap-2 font-bold text-sm rounded-full px-4 py-1" rel="noreferrer">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 24 24" fill="white">
							<path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"/>
						</svg>
						<span className="hidden lg:block">foxyarmy</span>
					</a>
					<a href="https://discord.gg/9Yph9njFNF" target="_blank"
					   className="flex justify-center items-center gap-2 font-bold text-sm rounded-full px-4 py-1" rel="noreferrer">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 24 24" fill="white">
							<path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/>
						</svg>
						<span className="hidden lg:block">foxyarmy</span>
					</a>
				</div>
			</div>
		</nav>
	)
}

export default TopBar;