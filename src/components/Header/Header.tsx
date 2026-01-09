"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

const ThemeToggleButton = dynamic(() => import("../ThemeToggleButton"), {
	ssr: false,
});

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header
			className={`bg-background fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
				isScrolled ? "border-b shadow-sm" : "border-b-0 shadow-none"
			}`}
			aria-label="app-header">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
				<Link
					href={"/"}
					className="flex items-center gap-2 text-3xl font-semibold tracking-widest">
					<h1>EARTH STORE</h1>
				</Link>

				<div className="flex items-center justify-self-end">
					{/* Desktop Nav */}
					<nav className="hidden items-center gap-5 md:flex">
						<Link href={"/"}>HOME</Link>
						<Link href={"/"}>ABOUT</Link>
						<Link href={"/"}>CONTACT</Link>
						<Link
							href={"https://github.com/piyushsarkar-dev"}
							target="_blank"
							rel="noopener noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="h-6 w-6">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</Link>
						<ThemeToggleButton />
					</nav>

					{/* Mobile Hamburger */}
					<div className="flex items-center gap-4 md:hidden">
						<ThemeToggleButton />
						<HamburgerMenu
							isOpen={isMenuOpen}
							toggle={toggleMenu}
						/>
					</div>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			{isMenuOpen && (
				<div className="bg-background absolute top-full right-0 left-0 h-screen border-b px-6 py-4 shadow-md md:hidden">
					<nav className="flex flex-col gap-4">
						<Link
							href={"/"}
							onClick={toggleMenu}
							className="text-lg font-medium">
							HOME
						</Link>
						<Link
							href={"/"}
							onClick={toggleMenu}
							className="text-lg font-medium">
							ABOUT
						</Link>
						<Link
							href={"/"}
							onClick={toggleMenu}
							className="text-lg font-medium">
							CONTACT
						</Link>
						<Link
							href={"https://github.com/piyushsarkar-dev"}
							target="_blank"
							rel="noopener noreferrer"
							onClick={toggleMenu}
							className="flex items-center gap-2 text-lg font-medium">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="h-6 w-6">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
							GitHub
						</Link>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
