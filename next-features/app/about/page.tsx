export async function generateMetadata({params}: {params: {id: string}}) {
    return {
        title: "About Page"
    };
}


export default function About() {
    return <h1>
        Hello About
    </h1>
}