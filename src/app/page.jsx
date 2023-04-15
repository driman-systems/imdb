import Results from "@/components/Results";

const api_key = process.env.API_KEY;

const Home = async({searchParams})=> {

  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchRated' ? 'movie/top_rated' : 'trending/all/week'}?api_key=${api_key}`, 
  {next: {revalidate: 10000}});

  if(!res.ok) {
    throw new error("Erro ao fazer a requisição");
  }

  const data = await res.json();

  const results = data.results;

  return (
      <main className='space-x-4'>
        <Results results={results} />
      </main>
  )
}

export default Home;
