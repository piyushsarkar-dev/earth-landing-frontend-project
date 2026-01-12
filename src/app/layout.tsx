import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import WrapFooter from "@/components/WrapFooter";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
	title: "Next.js Frontend Template",
	icons: {
		icon: "/logo.png",
	},
};

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute={"class"}
					defaultTheme="light"
					enableSystem={false}>
					<Header />

					<main className="">{children}</main>
				</ThemeProvider>
				<WrapFooter />
			</body>
		</html>
	);
};

export default RootLayout;
