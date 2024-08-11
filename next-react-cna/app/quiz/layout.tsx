export default function NestedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<nav>
			<p className="ml-4">Navigation for quiz page</p>
			{children}
		</nav>
	);
}
