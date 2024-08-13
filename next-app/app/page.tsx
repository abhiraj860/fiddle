import PrimaryButton from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="flex w-full h-full">
			<div className="w-1/2 ">
				<h1 className="mt-5 text-8xl font-bold text-grey">
					Creative Thoughts.
				</h1>
				<p className="mt-8 text-grey">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div className="mt-8 grid gap-x-4 grid-cols-5">
					<Link href={"/about"}>
						<PrimaryButton
							text={"Learn More"}
							bgColor={"btncolor"}
							textColor={"textcolor"}
						/>
					</Link>
					<Link href={"/contact"}>
						<PrimaryButton
							text={"Contact"}
							bgColor={"textcolor"}
							textColor={"bgcolor"}
						/>
					</Link>
				</div>
				<div className="mt-2 grayscale w-[500px] h-[50px] relative ">
					<Image src="/brands.png" alt="brand" fill />
				</div>
			</div>
			<div className="ml-12 w-2/5 h-full bg-bgsoftcolor relative">
				<Image src="/hero.gif" alt="brand" fill />
			</div>
		</div>
	);
}
