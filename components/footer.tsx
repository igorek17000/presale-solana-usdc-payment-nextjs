const Footer = () => {
	return (
		<footer className="relative bg-gray-900 text-center px-6 text-gray-300">
			<h1 className="pt-16 text-2xl font-bold text-white">Follow #Foxy on our different social networks.</h1>
			<p className="pt-3 pb-6 font-medium">Using the links below, you can join our various groups other members of
				the Foxy Army!</p>
			<div className="py-10 grid grid-cols-2 lg:flex lg:justify-center lg:gap-x-20 gap-y-6">
				<a href="https://www.facebook.com/foxyarmy" target="_blank" rel={"noreferrer"}
				   className="flex flex-col justify-center items-center gap-y-2 hover:text-gray-100">
					<svg className="w-12" fill="#4267B2" viewBox="0 0 24 24" aria-hidden="true">
						<path fillRule="evenodd"
							  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
							  clipRule="evenodd"/>
					</svg>
					<span className="font-bold">Facebook</span>
				</a>
				<a href="https://www.youtube.com/channel/foxyarmy" target="_blank" rel={"noreferrer"}
				   className="flex flex-col justify-center items-center gap-y-2 hover:text-gray-100">
					<svg className="w-12 h-12" viewBox="0 0 159 110" xmlns="http://www.w3.org/2000/svg" fill="#FF0000">
						<path
							d="m154 17.5c-1.82-6.73-7.07-12-13.8-13.8-9.04-3.49-96.6-5.2-122 0.1-6.73 1.82-12 7.07-13.8 13.8-4.08 17.9-4.39 56.6 0.1 74.9 1.82 6.73 7.07 12 13.8 13.8 17.9 4.12 103 4.7 122 0 6.73-1.82 12-7.07 13.8-13.8 4.35-19.5 4.66-55.8-0.1-75z"
							fill="#f00"/>
						<path d="m105 55-40.8-23.4v46.8z" fill="#fff"/>
					</svg>
					<span className="font-bold">Youtube</span>
				</a>
				<a href="https://t.me/foxyarmy" target="_blank" rel={"noreferrer"}
				   className="flex flex-col justify-center items-center gap-y-2 hover:text-gray-100">
					<svg xmlns="http://www.w3.org/2000/svg" className="w-12" fill="#0088cc" viewBox="0 0 24 24">
						<path
							d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
					</svg>
					<span className="font-bold">Telegram</span>
				</a>
				<a href="https://www.instagram.com/join.foxy.army" target="_blank" rel={"noreferrer"}
				   className="flex flex-col justify-center items-center gap-y-2 hover:text-gray-100">
					<svg viewBox="0 0 80 81" className="w-12" fill="url(#jsc_s_2)">
						<defs>
							<linearGradient x1="69.27%" x2="128.20%" y1="129.46%" y2="29.46%" id="jsc_s_2">
								<stop offset="0" stopColor="#FDD074"/>
								<stop offset="25%" stopColor="#F77F34"/>
								<stop offset="50%" stopColor="#DD326E"/>
								<stop offset="75%" stopColor="#D82B7E"/>
								<stop offset="100%" stopColor="#A432B1"/>
							</linearGradient>
						</defs>
						<path
							d="m43.655 0 5.21.025 3.4.055 2.74.095L56.49.24c4.26.195 7.165.87 9.71 1.86 2.63 1.025 4.86 2.39 7.085 4.615 2.225 2.225 3.595 4.46 4.615 7.09.88 2.26 1.51 4.81 1.775 8.34l.19 3.775.09 3.59.045 6.855-.03 12.835-.075 4.015-.135 3.3c-.195 4.26-.87 7.17-1.86 9.715-1.02 2.63-2.39 4.865-4.615 7.09-2.225 2.225-4.455 3.59-7.085 4.615-2.26.88-4.81 1.51-8.335 1.775l-4.3.205-3.78.085-6.13.035-12.835-.03-4.01-.075-3.3-.135c-4.26-.195-7.165-.87-9.71-1.86-2.63-1.025-4.865-2.39-7.085-4.615C4.49 71.095 3.12 68.86 2.1 66.23 1.22 63.97.59 61.42.325 57.89l-.15-2.86-.095-2.745-.055-3.395L0 42.545l.025-11.4.055-3.395.095-2.745.065-1.485c.195-4.26.87-7.17 1.86-9.715 1.02-2.63 2.39-4.865 4.615-7.09C8.935 4.49 11.17 3.125 13.8 2.1c2.26-.88 4.81-1.51 8.34-1.775l2.855-.15 2.74-.095 3.4-.055L36.345 0h7.31zm5.09 7.235h-17.49l-3.03.045-4.39.165a32.326 32.326 0 0 0-3.294.307l-.599.097a20.85 20.85 0 0 0-1.316.273l-.46.117c-.148.04-.29.08-.426.121l-.93.31-.4.15c-1.87.73-3.2 1.595-4.6 2.995-1.4 1.4-2.265 2.735-2.99 4.6l-.31.845-.136.432c-.362 1.201-.705 2.817-.874 5.133l-.09 1.7-.13 3.57-.065 6.18.015 14.255.08 4.41.13 3.25a31.47 31.47 0 0 0 .344 3.534l.098.57c.017.092.034.182.052.27l.108.511.113.474c.019.076.038.151.058.224l.117.424.12.393.06.185.31.845c.725 1.865 1.59 3.2 2.99 4.6 1.4 1.4 2.73 2.27 4.6 2.995l.845.305.378.121.2.06.423.118c.073.02.148.04.224.058l.473.113.51.108.55.102c1.044.18 2.296.32 3.822.39l4.875.175 6.515.055 14.115-.025 3.58-.07 3.245-.135c1.526-.07 2.778-.21 3.822-.39l.55-.102.51-.108.473-.113.224-.058.423-.118.393-.12.185-.061.845-.305c1.87-.725 3.2-1.595 4.6-2.995 1.4-1.4 2.265-2.735 2.995-4.6l.305-.845c.41-1.24.82-2.96 1.01-5.565l.19-4.245.08-4.285.02-6.18-.02-11.145-.08-4.285-.13-3.225a33.046 33.046 0 0 0-.262-2.977l-.093-.622c-.049-.3-.1-.582-.155-.85l-.112-.516a18.598 18.598 0 0 0-.116-.479l-.12-.442-.062-.209-.38-1.135-.075-.2c-.73-1.865-1.595-3.2-2.995-4.6-1.4-1.4-2.73-2.265-4.6-2.995l-.4-.15-.93-.31-.229-.066-.488-.13c-1.102-.279-2.505-.525-4.358-.659L54.21 7.36l-2.435-.08-3.03-.045z"/>
						<path
							d="M40 19.47c11.345 0 20.54 9.2 20.54 20.545 0 11.35-9.195 20.55-20.54 20.55-11.345 0-20.54-9.2-20.54-20.55C19.46 28.67 28.655 19.47 40 19.47zm0 7.21c-7.365 0-13.335 5.97-13.335 13.335 0 7.37 5.97 13.34 13.335 13.34 7.365 0 13.335-5.97 13.335-13.34 0-7.365-5.97-13.335-13.335-13.335zM66.15 18.65a4.801 4.801 0 1 1-9.598-.002 4.801 4.801 0 0 1 9.598.002z"/>
					</svg>
					<span className="font-bold">Instagram</span>
				</a>
				<a href="https://twitter.com/joinfoxyarmy" target="_blank" rel={"noreferrer"}
				   className="flex flex-col justify-center items-center gap-y-2 hover:text-gray-100">
					<svg className="w-12" fill="#1DA1F2" viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
					</svg>
					<span className="font-bold">Twitter</span>
				</a>
				<a href="https://github.com/foxytoken" target="_blank" rel={"noreferrer"}
				   className="flex flex-col justify-center items-center gap-y-2 hover:text-gray-100">
					<svg className="w-12" fill="#f5f5f5" viewBox="0 0 24 24" aria-hidden="true">
						<path fillRule="evenodd"
							  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							  clipRule="evenodd"/>
					</svg>
					<span className="font-bold">GitHub</span>
				</a>
			</div>
			<div className="max-w-7xl font-medium mx-auto text-white py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
				<p className="mt-8 text-center text-base">
					&copy; {new Date().getFullYear()} Foxy - All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;