import Link from "next/link";

export default function QuizPage({ params }: { params: { id: string } }) {
	return (
		<section>
			<h1>Quiz {params.id}</h1>
			<Link href={"/"}>
				<button className="border-red-600 border-2 p-2" type="submit">Back</button>
			</Link>
		</section>
	);
}
