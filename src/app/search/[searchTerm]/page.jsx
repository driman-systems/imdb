import Results from '@/components/Results';

const Search = async({params}) => {

const searchTerm = params.searchTerm;

const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=pt-BR`);

if(!res.ok) { 
    throw new Error("Algo deu errado")
}

const data = await res.json();

const results = data.results;

  return (
    <div>
        {results && results.length === 0  ? (
            <h1 className="text-center pt-6">Não foram encontrados filmes relacionados a esta pesquisa</h1>
        ): (  
          <Results results={results} />
        )} 
    </div>
  )
}

export default Search
