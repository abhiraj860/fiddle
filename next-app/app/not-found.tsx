import Link from "next/link";

export default function NotFound() {
	return (
		<div>
			<div>Not Found page</div>
			<div><Link href="/" className="underline"> Go back to home page</Link></div>
		</div>
	);
}
