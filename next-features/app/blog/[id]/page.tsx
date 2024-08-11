export async function generateMetadata( {params}: {params: {id: string}} ) {
    return {
        title: 'My blog post'
    };
}


export default function Page({
	params,
	searchParams,
}: {
	params: { id: string };
	searchParams: { [key:string]: string };
}) {
	return <div>
        <h1>ID: {params.id}</h1>
        <h1>search params 1: {searchParams.id}</h1>
        <h1>search params 2: {searchParams.name}</h1>
    </div>;
}
