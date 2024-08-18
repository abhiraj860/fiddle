import Image from "next/image";
// about page next image
export default function AboutPage() {
	return (
		<div>
			<div className="w-[400px] h-[400px] relative">
				<Image alt="about image" src="/about.png" fill />
			</div>
		</div>
	);
}
