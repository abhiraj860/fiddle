import Link from "next/link";
// next links
export default function Footer() {
	return (
		<div className="flex justify-between py-6">
			<div className="text-grey text-xs font-bold">
				<Link href="/">LamaDev</Link>
			</div>
			<div className="text-xs text-grey font-bold">
				Lama creative thoughts agency ©️ All rights reserved
			</div>
		</div>
	);
}
