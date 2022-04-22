import {NextPage} from "next";
import Countdown from "react-countdown";

interface ICountdown {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	completed: boolean;
}


import { useState } from 'react'
import PresaleCard from "../components/presale-card";

const product = {
	name: 'Everyday Ruck Snack',
	href: '#',
	price: '$220',
	description:
		"Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
	imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
	imageAlt: 'Model wearing light green backpack with black canvas straps and front zipper pouch.',
	breadcrumbs: [
		{ id: 1, name: 'Travel', href: '#' },
		{ id: 2, name: 'Bags', href: '#' },
	],
	sizes: [
		{ name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
		{ name: '20L', description: 'Enough room for a serious amount of snacks.' },
	],
}
const reviews = { average: 4, totalCount: 1624 }


const renderer = ({days, hours, minutes, seconds, completed}: ICountdown) => {
	if (!completed) {
		return (
			<div className={"flex justify-center"}>
				<span className={"text-8xl font-extrabold"}>{days}</span>
				<span className={"text-8xl font-extrabold px-2"}>d</span>
				<span className={"text-8xl font-extrabold pl-4"}>{hours}</span>
				<span className={"text-8xl font-extrabold px-2"}>:</span>
				<span className={"text-8xl font-extrabold"}>{minutes.toString().padStart(2, '0')}</span>
				<span className={"text-8xl font-extrabold px-2"}>:</span>
				<span className={"text-8xl font-extrabold"}>{seconds.toString().padStart(2, '0')}</span>
			</div>
		)
	}
};

const Presale: NextPage = () => {
	const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
	return (
		<>
			<section>
				<div className="mx-auto max-w-7xl px-2">
					<h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						Participate to Presale
					</h2>
					<p className="mt-4 max-w-3xl mx-auto text-center text-xl">
						Our presale will take place on April 21, 2022 at 12:00 UTC
					</p>
					<div className={"pt-10 lg:pt-16 pb-32"}>
						<PresaleCard />
						{/*<Countdown*/}
						{/*	renderer={renderer}*/}
						{/*	date={Date.parse('21 Mar 2022 12:00:00 GMT')}>*/}
						{/*	<h1>Suck</h1>*/}
						{/*</Countdown>*/}
						{/*<p className={"font-bold text-2xl mt-3"}>Countdown before opening of the presale.</p>*/}
					</div>
				</div>
			</section>
		</>
	);
}

export default Presale;