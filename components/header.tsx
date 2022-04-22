import Link from 'next/link';
import Image from 'next/image';
import {Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react';

import {
	BookmarkAltIcon, CalendarIcon,
	ChartPieIcon,
	CollectionIcon,
	DocumentTextIcon,
	DotsVerticalIcon,
	HomeIcon, MenuIcon, PhoneIcon, PlayIcon, ShieldCheckIcon, SupportIcon,
	TicketIcon, XIcon
} from "@heroicons/react/outline";
import {WalletMultiButton} from '@solana/wallet-adapter-react-ui';

import {ChevronDownIcon} from '@heroicons/react/solid'

const solutions = [
	{
		name: 'Insights',
		description: 'Measure actions your users take',
		href: '##',
		icon: IconOne,
	},
	{
		name: 'Automations',
		description: 'Create your own targeted content',
		href: '##',
		icon: IconTwo,
	},
	{
		name: 'Reports',
		description: 'Keep track of your growth',
		href: '##',
		icon: IconThree,
	},
]


function IconOne() {
	return (
		<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="48" height="48" rx="8" fill="#FFEDD5"/>
			<path d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z" stroke="#FB923C" strokeWidth="2"/>
			<path fillRule="evenodd" clipRule="evenodd"
				  d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
				  stroke="#FDBA74" strokeWidth="2"/>
			<path fillRule="evenodd" clipRule="evenodd"
				  d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
				  stroke="#FDBA74" strokeWidth="2"/>
		</svg>
	)
}

function IconTwo() {
	return (
		<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="48" height="48" rx="8" fill="#FFEDD5"/>
			<path d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
				  stroke="#FB923C" strokeWidth="2"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M18.804 30H29.1963L24.0001 21L18.804 30Z" stroke="#FDBA74"
				  strokeWidth="2"/>
		</svg>
	)
}

function IconThree() {
	return (
		<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="48" height="48" rx="8" fill="#FFEDD5"/>
			<rect x="13" y="32" width="2" height="4" fill="#FDBA74"/>
			<rect x="17" y="28" width="2" height="8" fill="#FDBA74"/>
			<rect x="21" y="24" width="2" height="12" fill="#FDBA74"/>
			<rect x="25" y="20" width="2" height="16" fill="#FDBA74"/>
			<rect x="29" y="16" width="2" height="20" fill="#FB923C"/>
			<rect x="33" y="12" width="2" height="24" fill="#FB923C"/>
		</svg>
	)
}

const callsToAction = [
	{name: 'Watch Demo', href: '#', icon: PlayIcon},
	{name: 'Contact Sales', href: '#', icon: PhoneIcon},
]
const resources = [
	{
		name: 'Help Center',
		description: 'Get all of your questions answered in our forums or contact support.',
		href: '#',
		icon: SupportIcon,
	},
	{
		name: 'Guides',
		description: 'Learn how to maximize our platform to get the most out of it.',
		href: '#',
		icon: BookmarkAltIcon,
	},
	{
		name: 'Events',
		description: 'See what meet-ups and other events we might be planning near you.',
		href: '#',
		icon: CalendarIcon,
	},
	{name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon},
]

const recentPosts = [
	{id: 1, name: 'Boost your conversion rate', href: '#'},
	{id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#'},
	{id: 3, name: 'Improve your customer experience', href: '#'},
]

const Header = () => (
	<Popover className="relative py-4 z-20 bg-opacity-70">
		<div className="max-w-7xl mx-auto px-2">
			<div className="flex justify-between items-center px-3 py-0 lg:py-6 md:justify-start md:space-x-10">
				<div className="flex justify-start lg:w-0 lg:flex-1">
					<Link href={"/"}>
						<a className="flex items-center gap-x-4">
							<img className="h-16 filter-drop-shadow-md mt-1" alt="foxy"
								 src="/foxy.png"/>
							<div className="flex flex-col">
								<h1 className="text-2xl font-bold">
									Foxy
									<span className="font-normal">Token</span>
								</h1>
								<p className="text-xs font-medium text-gray-800">Join The Foxy Army</p>
							</div>
						</a>
					</Link>
				</div>
				<div className="-mr-2 -my-2 md:hidden">
					<Popover.Button
						className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
						<span className="sr-only">Open menu</span>
						<MenuIcon className="h-6 w-6" aria-hidden="true"/>
					</Popover.Button>
				</div>
				<Popover.Group as="nav" className="hidden md:flex space-x-10">
					<Link href={"/"}>
						<a className="flex items-center gap-x-2 text-base font-medium text-gray-800 hover:text-gray-900">
							<HomeIcon className={"w-5"}/>
							Home
						</a>
					</Link>
					<Link href={"/presale"}>
						<a className="flex items-center gap-x-2 text-base font-medium text-gray-800 hover:text-gray-900">
							<CollectionIcon className={"w-5"}/>
							Presale
							{/*<sup>⚪</sup>*/}
						</a>
					</Link>
					<Link href={"/game"}>
						<a className="flex items-center gap-x-2 text-base font-medium text-gray-800 hover:text-gray-900">
							<TicketIcon className={"w-5"}/>
							Play &amp; Earn
						</a>
					</Link>
					<a href={"https://read.foxy.army/"} target={"_blank"} rel={"noreferrer"} className={"flex items-center gap-x-2 text-base font-medium text-gray-800 hover:text-gray-900"}>
						<DocumentTextIcon className={"w-5"} />
						Documentation
					</a>
					<WalletMultiButton
						className={"reset whitespace-nowrap inline-flex gap-x-2 items-center justify-center px-6 py-2 border border-gray-800 rounded-full shadow-sm text-base font-medium bg-gray-800 text-gray-100 hover:bg-gray-800 hover:text-gray-100"}/>
				</Popover.Group>
			</div>
		</div>

		<Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95">
			<Popover.Panel focus
						   className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
				<div
					className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
					<div className="pt-5 pb-6 px-5">
						<div className="flex items-center justify-between">
							<div>
								<img className="h-8 w-auto"
									 src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
									 alt="Workflow"/>
							</div>
							<div className="-mr-2">
								<Popover.Button
									className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Close menu</span>
									<XIcon className="h-6 w-6" aria-hidden="true"/>
								</Popover.Button>
							</div>
						</div>
						<div className="mt-6">
							<nav className="grid gap-y-8">
								{solutions.map((item) => (
									<a key={item.name} href={item.href}
									   className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
										<item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600"
												   aria-hidden="true"/>
										<span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
									</a>
								))}
							</nav>
						</div>
					</div>
					<div className="py-6 px-5 space-y-6">
						<div className="grid grid-cols-2 gap-y-4 gap-x-8">
							<a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
								Pricing
							</a>

							<a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
								Docs
							</a>
							{resources.map((item) => (
								<a key={item.name} href={item.href}
								   className="text-base font-medium text-gray-900 hover:text-gray-700">
									{item.name}
								</a>
							))}
						</div>
						<div>
							<a href="#"
							   className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
								Sign up
							</a>
							<p className="mt-6 text-center text-base font-medium text-gray-500">
								Existing customer?{' '}
								<a href="#" className="text-indigo-600 hover:text-indigo-500">
									Sign in
								</a>
							</p>
						</div>
					</div>
				</div>
			</Popover.Panel>
		</Transition>
	</Popover>
)

export default Header;