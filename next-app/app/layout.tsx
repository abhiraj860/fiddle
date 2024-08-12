import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="flex justify-center bg-bgcolor text-textcolor">
				<div className="flex flex-col min-h-screen w-5/6">
					<Navbar />
					<div className="flex-grow">{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
