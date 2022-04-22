import {NextPage} from "next";
import Link from "next/link";

const ErrorPage: NextPage = () => {
	return (
		<section className="min-h-full pt-16 pb-12 flex flex-col ">
			<div className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex-shrink-0 flex justify-center">
					<Link href={"/"}>
						<a className="inline-flex">
							<img
								className="h-64 w-auto filter drop-shadow-xl"
								alt={"foxy"}
								src={"/foxy-hq.png"}
							/>
						</a>
					</Link>
				</div>
				<div className="py-16">
					<div className="text-center">
						<p className="text-sm font-semibold uppercase tracking-wide">404 error</p>
						<h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page Not Found.</h1>
						<p className="mt-2 text-base">Sorry, we couldn’t find the page you’re looking for.</p>
						<div className="mt-6">
							<Link href={"/"}>
								<a className="text-base font-medium text-white hover:text-gray-800">
									Go back home
									<span aria-hidden="true"> &rarr;</span>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ErrorPage;
