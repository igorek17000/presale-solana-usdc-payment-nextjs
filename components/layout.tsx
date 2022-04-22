import React from "react";
import TopBar from "./topbar";
import Header from "./header";
import Head from 'next/head';
import Footer from "./footer";

type LayoutProps = {
	children: React.ReactNode,
};

export default function Layout({children}: LayoutProps) {
	return (
		<>
			<Head>
				<title>$FOXY Token | Join the Foxy Army NOW!</title>
				<meta name="title" content="$FOXY Token | Join the Foxy Army NOW!"/>
				<meta name="keywords" content="foxy,token,army,shiba,inu,token,solana,binance,smart,chain,ethereum,crypto,airdrop"/>
				<meta name="description" content="Foxy is the world cutest and the first multi-chain meme-coin!	Join the $FOXY army now! Available on Solana, Binance Smart Chain, Polygon and many more."/>
				<meta property="og:type" content="website"/>
				<meta property="og:url" content="https://foxy.army/"/>
				<meta property="og:title" content="$FOXY Token | Join the Foxy Army NOW!"/>
				<meta property="og:description" content="Foxy is the world cutest and the fsirst multi-chain meme-coin! Join the $FOXY army now! Available on Solana, Binance Smart Chain, Polygon and many more."/>
				<meta property="og:image" content="https://foxy.army/preview.jpeg"/>
				<meta property="twitter:card" content="summary_large_image"/>
				<meta property="twitter:url" content="https://twitter.com/joinfoxyarmy"/>
				<meta property="twitter:title" content="$FOXY Token | Join the Foxy Army NOW!"/>
				<meta property="twitter:description" content="Foxy is the world cutest and the first multi-chain meme-coin! Join the $FOXY army now! Available on Solana, Binance Smart Chain, Polygon and many more."/>
				<meta property="twitter:image" content="https://foxy.army/preview.jpeg"/>
				<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
				<link rel="icon" type="image/png" href={"/favicon.png"}/>
			</Head>
			<TopBar/>
			<Header/>
			<main role={"main"} className={"text-gray-800"}>
				{children}
			</main>
			<Footer/>
		</>
	)
}