import { useCallback, useState } from 'react'
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import { DocumentTextIcon, ShieldCheckIcon } from '@heroicons/react/outline'
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
// @ts-ignore
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { createTransaction, encodeURL, parseURL } from "@solana/pay";
import BigNumber from "bignumber.js";

const USDC_MINT_ADDRESS = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
const ASSOCIATED_TOKEN_PROGRAM_ID = new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
const DEST_PUB_KEY = new PublicKey("9o46mpNAogySuc7ewW4CcDtSbYH6SxgfkzZdBYY3eW1s");

const blockchains = [
	{
		id: 'solana',
		name: 'Solana',
		description: 'Direct participation using Wallet',
		recommended: true
	},
	{
		id: 'bsc',
		name: 'Binance Smart Chain',
		description: 'Manual participation only.',
	},
	{
		id: 'polygon',
		name: 'Polygon',
		description: 'Manual participation only.',
	},
]

export default function PresaleCard() {
	const [selectedBlockchain, setSelectedBlockchain] = useState(blockchains[0]);
	const {connection} = useConnection();
	const {connected, publicKey, sendTransaction} = useWallet();
	const {setVisible} = useWalletModal();
	const [amount, setAmount] = useState<number>(0);
	const [info, setInfo] = useState('')

	const findAssociatedTokenAddress = async (walletAddress: any, tokenMintAddress: any) => {
		let res = await PublicKey.findProgramAddress(
			[
				walletAddress.toBuffer(),
				TOKEN_PROGRAM_ID.toBuffer(),
				tokenMintAddress.toBuffer(),
			],
			ASSOCIATED_TOKEN_PROGRAM_ID
		)
		return res[0];
	};

	const participate = useCallback(async () => {
		setInfo('');
		try {
			if (!publicKey) throw new WalletNotConnectedError();

			const network = clusterApiUrl('mainnet-beta')
			const _connection = new Connection(network, 'confirmed')
			// @ts-ignore
			let _amount = new BigNumber(amount)
			const tx = await createTransaction(_connection, publicKey, DEST_PUB_KEY, _amount, {
				splToken: USDC_MINT_ADDRESS,
				memo: "check"
			});
			const signature = await sendTransaction(tx, connection)
			await _connection.confirmTransaction(signature, "processed")
			setInfo('Thank you!')
		} catch (e: any) {
			setInfo(e.message)
		}
	}, [publicKey, sendTransaction, connection, amount]);
	return (
		<div className={"mx-auto max-w-5xl card bg-white px-8 py-5 rounded-md shadow-sm"}>
			<section>
				<div className="my-4">
					<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						Buy <span className={"-text-[#FF8C00C2]"}>$FOXY</span> Token
					</h1>
				</div>
				<div className="mt-4 mb-6 space-y-6">
					<p className="text-base max-w-3xl text-gray-500">
						Foxy is the cutest and the first multi-chain meme-coin!
						With this presale you buy at a reduced price before the launch at the end of the month. </p>
				</div>
				<div className="flex justify-between flex-col lg:flex-row gap-y-6 lg:gap-y-0 my-6 mr-5">
					<div className="flex items-center">
						<div className="mr-4">
							<img alt="FOXY" className="w-10" src="/foxy.png"/>
						</div>
						<div>
							<p className="text-sm">Available Tokens</p>
							<h4 className="text-xl whitespace-nowrap">1,000,000,000 FOXY</h4>
						</div>
					</div>
					<div className="flex items-center">
						<div className="mr-4">
							<img alt="USDC" className="w-10"
								 src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"/>
						</div>
						<div>
							<p className="text-sm">Token Price</p>
							<h4 className="text-xl whitespace-nowrap">
								0.005 USDC </h4>
						</div>
					</div>
					<div className="flex items-center">
						<div className="mr-4">
							<img alt="USDC" className="w-10"
								 src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"/>
						</div>
						<div>
							<p className="text-sm">Hard Cap</p>
							<h4 className="text-xl whitespace-nowrap">500,000 USDC</h4>
						</div>
					</div>
				</div>
				<form>
					<RadioGroup value={selectedBlockchain} onChange={setSelectedBlockchain}>
						<RadioGroup.Label className="block text-sm mb-3 font-medium text-gray-700">How to
							Participate?</RadioGroup.Label>
						<div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-3">
							{blockchains.map((blockchain) => (
								<RadioGroup.Option as="div" key={blockchain.name} value={blockchain}
												   className={({active}) => `${active ? 'ring-2 ring-[#FF8C00C2]' : ''} relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none`}>
									{({active, checked}) => (
										<>
											<RadioGroup.Label as="p"
															  className="text-base gap-x-2 flex items-center font-medium text-gray-900">
												{blockchain.name}
												{blockchain.recommended && (
													<span
														className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#FF8C0033] text-gray-800">
														Recommended </span>
												)}
											</RadioGroup.Label>
											<RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
												{blockchain.description}
											</RadioGroup.Description>
											<div
												className={`${active ? 'border' : 'border-2'} ${checked ? 'border-[#FF8C00C2]' : 'border-transparent'} absolute -inset-px rounded-lg pointer-events-none`}
												aria-hidden="true"/>
										</>
									)}
								</RadioGroup.Option>
							))}
						</div>
					</RadioGroup>
					<div className="mt-3">
						<a href="https://read.foxy.army/" target={"_blank"}
						   className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
							<span>What blockchain should I use?</span>
							<QuestionMarkCircleIcon
								className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
								aria-hidden="true"/>
						</a>
					</div>
					{selectedBlockchain.id === 'solana' && (
						<div className={"mt-4"}>
							<label htmlFor="price" className="block text-sm font-medium text-gray-700">
								Amount (in USDC)
							</label>
							<div className="mt-1 relative rounded-md shadow-sm">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<span className="text-gray-500 sm:text-sm">$</span>
								</div>
								<input value={amount} onChange={(e) => setAmount(e.target.value)} type="number"
									   name="price" id="price" min={"1"} max={"50000"}
									   className="focus:ring-[#FF8C00C2] focus:border-[#FF8C00C2] block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
									   placeholder="0.00" aria-describedby="price-currency"/>
								<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
									<span className="text-gray-500 sm:text-sm" id="price-currency">
										USDC
									</span>
								</div>
							</div>
						</div>
					)}
					{selectedBlockchain.id === 'bsc' && (
						<div className={"bg-gray-100 mt-4 rounded p-4"}>
							<h1 className={"text-lg mb-3 font-medium"}>Participate using BSC</h1>
							<p className={"text-sm"}>For participate using BSC, you should send your <span
								className={"font-medium"}>USDC</span> to <span
								className={"font-medium"}>0x74a971207E360c54936F187F691596fF21EBDB3A</span></p>
						</div>
					)}
					{selectedBlockchain.id === 'polygon' && (
						<div className={"bg-gray-100 mt-4 rounded p-4"}>
							<h1 className={"text-lg mb-3 font-medium"}>Participate using Polygon</h1>
							<p className={"text-sm"}>For participate using BSC, you should send your <span
								className={"font-medium"}>USDC</span> to <span
								className={"font-medium"}>0x74a971207E360c54936F187F691596fF21EBDB3A</span></p>
						</div>
					)}
					<div className="mt-6">
						{connected ? (
							(amount > 0 ? (
								<button onClick={participate} type="button"
										className={"w-full bg-[#FF8C00C2] hover:bg-[#FF8C00D1] uppercase border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-[#FF8C00C2]"}>
									Buy $FOXY Token </button>
							) : (
								<button type="button"
										className={"w-full bg-[#FF8C0077] uppercase border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-[#FF8C00C2]"}>
									Buy $FOXY Token </button>
							))
						) : (
							<button onClick={() => setVisible(true)} type="button"
									className="w-full bg-[#FF8C00C2] hover:bg-[#FF8C00D1] uppercase border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-[#FF8C00C2]">
								Connect Wallet </button>
						)}
						<div>{info || ''}</div>
					</div>
					<div className="mt-6 text-center">
						<a href="https://read.foxy.army" target={"_blank"}
						   className="group inline-flex text-base font-medium">
							<DocumentTextIcon
								className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"/>
							<span className="text-gray-500 hover:text-gray-700">Read our Documentation</span>
						</a>
					</div>
				</form>
			</section>
		</div>
	)
}
