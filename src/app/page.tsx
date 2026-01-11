import MainPostCard from "@/components/MainPostCard";
import { HeartPlus, LockKeyhole, Package, Quote } from "lucide-react";
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
			<section className="space-y-8 px-48 py-28">
				<div className="text-5xl font-semibold uppercase">
					What Our Customers Say
				</div>

				<div className="grid grid-cols-3 gap-28">
					<div className="space-y-8">
						<div className="">
							Fast shipping and excellent customer service. The product was even
							better than expected. I will definitely be a returning customer.
						</div>

						<div className="flex justify-between">
							<div className="space-y-6">
								<Image
									src={"/avatar-1.jpeg"}
									alt="avatar-1.jpeg"
									width={40}
									height={40}
									className="aspect-square h-10 w-10 rounded-full"
								/>

								<div className="font-bold uppercase">Jennifer Lewis</div>
							</div>

							<Quote className="text-earth-light fill-earth-light" />
						</div>
					</div>

					<div className="space-y-8">
						<div className="">
							Great user experience on your website. I found exactly what I was
							looking for at a great price. I will definitely be telling my
							friends.
						</div>

						<div className="flex justify-between">
							<div className="space-y-6">
								<Image
									src={"/avatar-2.jpeg"}
									alt="avatar-2.jpeg"
									width={40}
									height={40}
									className="aspect-square h-10 w-10 rounded-full"
								/>

								<div className="font-bold uppercase">Alicia Heart</div>
							</div>

							<Quote className="text-earth-light fill-earth-light" />
						</div>
					</div>

					<div className="space-y-8">
						<div className="">
							Thank you for the excellent shopping experience. It arrived
							quickly and was exactly as described. I will definitely be
							shopping with you again in the future.
						</div>

						<div className="flex justify-between">
							<div className="space-y-6">
								<Image
									src={"/avatar-3.jpeg"}
									alt="avatar-3.jpeg"
									width={40}
									height={40}
									className="aspect-square h-10 w-10 rounded-full"
								/>

								<div className="font-bold uppercase">Juan Carlos</div>
							</div>

							<Quote className="text-earth-light fill-earth-light" />
						</div>
					</div>
				</div>
			</section>
			<MainPostCard />

			<section className="grid grid-cols-3 gap-8 px-48 py-16">
				<div className="flex items-center gap-4 border-r border-gray-300">
					<div className="bg-earth-light rounded-full p-3">
						<LockKeyhole className="text-white" />
					</div>

					<div className="">
						<div className="text-lg font-semibold uppercase">
							Secure Payment
						</div>
						<div className="">All our payments our SSL secured</div>
					</div>
				</div>

				<div className="flex items-center gap-4 border-r border-gray-300">
					<div className="bg-earth-light rounded-full p-3">
						<Package className="text-white" />
					</div>

					<div className="">
						<div className="text-lg font-semibold uppercase">
							Delivered With Care
						</div>
						<div className="">Super fast shipping to your door</div>
					</div>
				</div>

				<div className="flex items-center gap-4">
					<div className="bg-earth-light rounded-full p-3">
						<HeartPlus className="text-white" />
					</div>

					<div className="">
						<div className="text-lg font-semibold uppercase">
							Excellent Service
						</div>
						<div className="">Live chat and phone support</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default page;
