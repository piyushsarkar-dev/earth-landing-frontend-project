import Link from "next/link";

const WrapFooter = () => {
	return (
		<footer className="flex items-center justify-between border-t border-gray-300 px-48 py-6">
			<div className="space-x-4">
				<Link href="/">Home</Link>
				<Link href="/">About</Link>
				<Link href="/">Contact</Link>
			</div>

			<Link
				href={"/"}
				className="flex items-center gap-2 text-3xl font-semibold tracking-widest">
				<h1>EARTH STORE</h1>
			</Link>

			<div className="">Copyright © 2025 Planet Earth Store</div>
		</footer>
	);
};

export default WrapFooter;
