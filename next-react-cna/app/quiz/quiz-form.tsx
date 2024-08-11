function Answer({ id }: { id: number }) {
	return (
		<label>
			Answer {id}
			<input
				className="bg-gray-200 border-gray-700 rounded p-1 ml-2 mb-4"
				type="text"
				name={`answer-${id}`}
			/>
			<input type="checkbox" name={`check-${id}`} value="value1" />
		</label>
	);
}

export default function QuizForm() {
	async function createQuiz(formData: FormData) {
		"use server";
		let title = formData.get("title");
		let description = formData.get("description");
		let question = formData.get("question");
		let answers = [1, 2, 3].map((id) => {
			return {
				answer: formData.get(`answer-${id}`),
				isCorrect: formData.get(`check-${id}`) === 'on',
			};
		});
	}
	return (
		<form className="mt-4 flex flex-col max-w-xs">
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
