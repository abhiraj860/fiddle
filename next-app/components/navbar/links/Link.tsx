import Link from "next/link";

export default function NavLink() {
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
	return (
		<div>
			{links.map((value) => (
				<Link href={value.link} key={value.title} className="underline">
					{value.title}
				</Link>
			))}
		</div>
	);
}
