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
    const getPath = usePathname();
	return (
		<div>
			{links.map((value) => (
				<Link href={value.link} key={value.title} className={` font-semibold mr-8 ${(getPath === value.link) && 'bg-textcolor text-bgcolor p-2 px-3 rounded-full'}`}>
					{value.title}
				</Link>
			))}
		</div>
	);
}
