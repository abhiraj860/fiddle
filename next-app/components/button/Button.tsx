export default function PrimaryButton({
	text,
	bgColor,
	textColor,
}: {
	text: string;
	bgColor: string;
	textColor: string;
}) {
	return (
		<>
			<button
				className={`text-sm w-[100px] py-4 px-1 bg-${bgColor} text-${textColor} rounded-md`}
			>
				{text}
			</button>
		</>
	);
}
