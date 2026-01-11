import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Earth Store",
	description: "Multipurpose Store",
};

const page = () => {
	return (
		<>
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
			<section className="grid grid-cols-3 gap-6 border-b border-gray-300 px-48 py-28">
				<div className="grid gap-1">
					<Image
						src={"/poster1.jpg"}
						alt="poster1.jpg"
						width={350}
						height={350}
						className="aspect-square h-auto w-auto rounded-sm"
					/>

					<div className="text-gray-500">Posters</div>
					<div className="text-lg font-bold uppercase">Poster V1</div>
					<div className="font-semibold">₹239.00</div>
				</div>

				<div className="grid gap-1">
					<Image
						src={"/poster2.jpg"}
						alt="poster2.jpg"
						width={350}
						height={350}
						className="aspect-square h-auto w-auto rounded-sm"
					/>

					<div className="text-gray-500">Posters</div>
					<div className="text-lg font-bold uppercase">Poster V2</div>
					<div className="font-semibold">₹212.00</div>
				</div>

				<div className="grid gap-1">
					<Image
						src={"/poster3.jpg"}
						alt="poster3.jpg"
						width={350}
						height={350}
						className="aspect-square h-auto w-auto rounded-sm"
					/>

					<div className="text-gray-500">Posters</div>
					<div className="text-lg font-bold uppercase">Poster V3</div>
					<div className="font-semibold">₹251.00</div>
				</div>
			</section>
		</>
	);
};

export default page;
