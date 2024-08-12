import Link from "next/link";
import postgres from "postgres";
import { Suspense } from "react";
import QuizForm from "./quiz/quiz-form";

const sql = postgres(process.env.DATABASE_URL!);

async function Quizzes() {
	await new Promise((r) => setTimeout(r, 1500));
	const quizzes = await sql`SELECT * FROM quizzes`;
	return (
		<ul>
			{quizzes.map((value) => (
				<li key={value.quiz_id} className="underline hover:pointer">
					<Link href={`/quiz/${value.quiz_id}`}>{value.title}</Link>
				</li>
			))}
		</ul>
	);
}

export default function Page() {
	return (
		<section>
			<h1 className="text-2xl font-semibold">All Quizzes</h1>
			<Suspense fallback={<p>LOADER...</p>}>
				<Quizzes />
				<QuizForm />
			</Suspense>
		</section>
	);
}
