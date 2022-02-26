
import Link from "next/link";
const NavBar = () => {
	return (
		<nav className="border-b p-6 flex justify-between">
				<p className="text-4xl font-bold">Addis's Marketplace</p>
				<div className="flex mt-4">
					<Link href="/">
						<a className="mr-4 text-pink-500">Home</a>
					</Link>

					<Link href="/create_item">
						<a className="mr-6 text-pink-500">Sell Digital Asset</a>
					</Link>
					<Link href="/my-assets">
						<a className="mr-6 text-pink-500">My Digital Assets</a>
					</Link>
					<Link href="/creator-dashboard">
						<a className="mr-6 text-pink-500">Creator Dashboard</a>
					</Link>
					<Link href="/creator-dashboard">
						<a className="mr-6 text-pink-500">Connect</a>
					</Link>
				</div>
			</nav>
	)
}

export default NavBar
