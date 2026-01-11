import Link from "next/link";

const MainPostCard = () => {
	return (
		<>
			<section className="grid place-items-center gap-8 bg-[url(/call-to-action.jpg)] bg-cover bg-center px-48 py-28">
				<div className="text-5xl font-semibold uppercase">
					Give the Gift of a Postcard
				</div>

				<div className="text-lg">
					Give the gift of a lasting memory with a postcard
				</div>

				<Link
					href={"/"}
					className="bg-earth-light hover:bg-earth-dark mt-4 rounded-sm px-8 py-2 text-xl text-white uppercase">
					Purchase A Postcard
				</Link>
			</section>
		</>
	);
};

export default MainPostCard;
