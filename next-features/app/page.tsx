interface Time {
  datetime: string;
}

interface Repository {
  id: string;
  name: string;
  full_name: string;
}

export async function generateMetadata({params}: {params: {id: string}}) {
  return {
    title: "Home Page"
  };
}

async function getTime() : Promise<Time> {
  const res = await fetch('http://worldtimeapi.org/api/timezone/America/Chicago', {
    next: {
      revalidate: 5,
    }
  });
  return res.json();
}

async function getRepos(): Promise<Repository> {
  const res = await fetch('http://api.github.com/repos/vercel/next.js');
  return res.json();
}

export default async function Page() {
  const [time, data] = await Promise.all([getTime(), getRepos()]);
  return <>
    <h1>{data.full_name}</h1> 
    <h1>Updated at: {time.datetime}</h1>
  </>
}