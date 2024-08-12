import { revalidatePath } from "next/cache";
import postgres from "postgres";

function Answer({ id }: { id: number }) {
	return (
		<label>
			Answer {id}
			<input
				className="bg-gray-200 border-gray-700 rounded p-1 ml-2 mb-4"
				type="text"
				name={`answer-${id}`}
			/>
			<input type="checkbox" name={`check-${id}`} />
		</label>
	);
}

const sql = postgres(process.env.DATABASE_URL!);

export default function QuizForm() {
	async function createQuiz(formData: FormData) {
		"use server";
		let title = formData.get("title") as string;
		let description = formData.get("description") as string;
		let question = formData.get("question") as string;
		let answers = [1, 2, 3].map((id) => {
			return {
				answer: formData.get(`answer-${id}`) as string,
				isCorrect: formData.get(`check-${id}`) === "on",
			};
		});
		const values = [
			title, // $1
			description, // $2
			question, // $3
			answers[0].answer,
			answers[0].isCorrect, // $4, $5
			answers[1].answer,
			answers[1].isCorrect, // $6, $7
			answers[2].answer,
			answers[2].isCorrect, // $8, $9
		];
		await sql.begin(async (sql) => {
			await sql`WITH inserted_quiz AS (
                  INSERT INTO quizzes (title, description, question_text, created_at)
                  VALUES (${values[0]}, ${values[1]}, ${values[2]}, NOW())
                  RETURNING quiz_id
                )
                INSERT INTO answers (quiz_id, answer_text, is_correct)
                VALUES 
                ((SELECT quiz_id FROM inserted_quiz), ${values[3]}, ${values[4]}),
                ((SELECT quiz_id FROM inserted_quiz), ${values[5]}, ${values[6]}),
                ((SELECT quiz_id FROM inserted_quiz), ${values[7]}, ${values[8]});`;
		});
		revalidatePath('/');
	}
	return (
		<form action={createQuiz} className="mt-4 flex flex-col max-w-xs">
			<h2 className="font-bold text-2xl"> Answers </h2>
			<label>
				Title
				<input
					className="bg-gray-200 border-gray-700 rounded p-1 ml-2 mb-4"
					type="text"
					name="title"
				/>
			</label>
			<label>
				Description
				<input
					className="bg-gray-200 border-gray-700 rounded p-1 ml-2 mb-4"
					type="text"
					name="description"
				/>
			</label>
			<label>
				Question
				<input
					className="bg-gray-200 border-gray-700 rounded p-1 ml-2 mb-4"
					type="text"
					name="question"
				/>
			</label>
			<Answer id={1} />
			<Answer id={2} />
			<Answer id={3} />
			<button
				type="submit"
				className="bg-gray-200 py-2 px-2 rounded hover:pointer hover:bg-gray-300 transition-all m-2"
			>
				Create Quiz
			</button>
		</form>
	);
}
