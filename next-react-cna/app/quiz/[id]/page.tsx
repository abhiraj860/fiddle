import Link from "next/link";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!);

async function Quizzes({ id }: { id: string }) {
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
					<li key={answers.answer_id}>{answers.answer_text}</li>
				))}
			</ul>
		</div>
	);
}

export default function QuizPage({ params }: { params: { id: string } }) {
	return (
		<section>
			<Quizzes id={params.id} />
			<Link href={"/"}>
				<button className="border-red-600 border-2 p-2" type="submit">
					Back
				</button>
			</Link>
		</section>
	);
}
