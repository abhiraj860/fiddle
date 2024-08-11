import { redirect } from "next/navigation";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!);

async function Quizzes({ id, show }: { id: string; show?: boolean }) {
	await new Promise((r) => setTimeout(r, 2000));
	const quizzes = await sql`SELECT
      q.quiz_id,
      q.title AS quiz_title,
      q.question_text,
      q.description,
      a.answer_id,
      a.answer_text,
      a.is_correct
    FROM quizzes q
    JOIN answers a ON q.quiz_id = a.quiz_id
    WHERE q.quiz_id = ${id}
  `;
	return (
		<div className="ml-4">
			<h1 className="text-2xl font-semibold">{quizzes[0].quiz_title}</h1>
			<p className="pb-2">{quizzes[0].description}</p>
			<p className="py-2">{quizzes[0].question_text}</p>
			<ul>
				{quizzes.map((answers) => (
					<li key={answers.answer_id}>
						<span>{answers.answer_text}</span>
						{show && answers.is_correct && "✅"}
					</li>
				))}
			</ul>
		</div>
	);
}

export default function QuizPage({
	params,
	searchParams,
}: {
	params: { id: string };
	searchParams: { show?: boolean };
}) {
	return (
		<section>
			<Quizzes id={params.id} show={searchParams.show} />
			<form
				action={async () => {
					"use server";
					redirect(`/quiz/${params.id}?show=true`);
				}}
			>
				<button className="bg-gray-200 py-2 px-2 rounded hover:pointer hover:bg-gray-300 transition-all m-2">
					Show Answer
				</button>
			</form>
		</section>
	);
}
