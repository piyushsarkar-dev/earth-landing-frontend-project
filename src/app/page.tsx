import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Earth Store",
	description: "Multipurpose Store",
};

const page = () => {
	return (
		<section className="relative w-full">
			<Image
				src="/home-banner.jpg"
				alt="Earth Store Banner"
				width={1920}
				height={1081}
				priority
				className="h-auto w-full"
			/>
			<div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 pt-16 text-center">
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
