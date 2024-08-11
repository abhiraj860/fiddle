import { Suspense } from "react";

export default function Home() {
	return (
		<section>
			<h1 className="text-2xl font-semibold">All Quizzes</h1>
			<Suspense fallback={<p>LOADER...</p>}>
				{/*  <Quizzes /> */}
			</Suspense>
		</section>
	);
}
