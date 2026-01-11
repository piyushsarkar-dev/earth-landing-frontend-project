import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Earth Store",
	description: "Multipurpose Store",
};

const page = () => {
	return (
		<section className="grid place-items-center bg-[url(/home-banner.jpg)] bg-cover bg-center py-64">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<h1 className="text-6xl font-bold tracking-wider text-[#2e5233] md:text-8xl">
					EARTH
				</h1>
				<p className="text-xl tracking-[0.2em] text-[#4a5568] md:text-2xl">
					MULTIPURPOSE STORE
				</p>
				<button className="bg-[#7da640] px-8 py-3 text-sm font-semibold tracking-widest text-white transition-colors hover:bg-[#6d9138]">
					SHOP NOW
				</button>
			</div>
		</section>
	);
};

export default page;
