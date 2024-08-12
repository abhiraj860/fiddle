"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink() {
	const links = [
		{
			title: "Homepage",
			link: "/",
		},
		{
			title: "About",
			link: "/about",
		},
		{
			title: "Contact",
			link: "/contact",
		},
		{
			title: "Blog",
			link: "/blog",
		},
	];
	const session = true;
	const isAdmin = true;

	const getPath = usePathname();
	return (
		<div>
			{links.map((value) => (
				<Link
					href={value.link}
					key={value.title}
					className={` font-semibold mr-8 ${
						getPath === value.link &&
						"bg-textcolor text-bgcolor p-2 px-5 rounded-full"
					}`}
				>
					{value.title}
				</Link>
			))}
			{session ? (
				<>
					{isAdmin && (
						<Link
							href={"/admin"}
							className={` font-semibold mr-8 ${
								getPath === "/admin" &&
								"bg-textcolor text-bgcolor p-2 px-5 rounded-full"
							}`}
						>
							Admin
						</Link>
					)}
				<button className="bg-textcolor text-bgcolor px-5 p-2 font-semibold rounded-md">
					Logout
				</button>

				</>
			) : (
				<button className="bg-textcolor text-bgcolor px-5 p-2 font-semibold rounded-md">
					Login
				</button>
			)}
		</div>
	);
}

// 		<Link
// 			href={"/admin"}
// 			className={` font-semibold mr-8 ${
// 				(getPath === "/admin") &&
// 				"bg-textcolor text-bgcolor p-2 px-5 rounded-full"
// 			}`}
// 		>
// 			Admin
// 		</Link>
// 	)
