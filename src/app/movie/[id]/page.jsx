import Image from "next/image";
import {FiThumbsUp} from 'react-icons/fi';

const Movie = async(req) => {

const movieId = req.params.id;

const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=pt-BR`);

const movie = await res.json();

const data = new Date(movie.release_date || movie.first_air_date);

const lancamento = data.toLocaleDateString();

  return (
    <div className="mt-5">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row item-center content-center md:space-x-6">
        <Image width={300} height={300} src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`}  
        alt={movie.title} 
        className="rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 mx-auto"
        placeholder="blur" 
        blurDataURL="/loading.svg"
        style={{
            maxWidth: "100%",
        }} />
        <div className="pt-2 mt-5">
            <h2 className="font-bold text-lg mb-3 text-center">{movie.title || movie.name}</h2>
            <p className="text-lg">
                {movie.overview}
            </p>
            <p className="text-lg mt-5">
                <span className="font-semibold mr-1">Lançamento: </span>
                {lancamento}                
            </p>
            <p className="text-lg mt-5 flex items-center">
                <span className="font-semibold mr-3"><FiThumbsUp /></span>
                {movie.vote_count}
            </p>
        </div>
        </div>
    </div>
  )
}

export default Movie;
