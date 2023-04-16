import Link from "next/link";
import Image from "next/image";
import {FiThumbsUp} from 'react-icons/fi'

const Card = ({result}) => {

  const handleDate = (date)=>{
    const res = new Date(date);

    return res.toLocaleDateString();
}

  return (
    <div className="cursor-pointer p-2 md:p-0 sm:hover:shadow-slate-400 shadow-md 
    rounded-lg border-slate-400 sm:m-2 transition-shadow duration-200
    group justify-center mt-10  md:mt-1 first-of-type:mt-1
    ">
      <Link href={`movie/${result.id}`}>

        <Image width={500} height={300} src={`https://image.tmdb.org/t/p/original/${result.poster_path || result.backdrop_path}`}  
        alt={result.title} 
        className="rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
        placeholder="blur" 
        blurDataURL="/loading.svg"
        style={{
            maxWidth: "100%",
            maxHeight: "300px"
        }} />

        <div className="px-4 py-3">
            <p className="line-clamp-2 text-md">{result.overview}</p>
        </div>

        <h2 className="font-bold truncate font-lg py-3 px-4">{result.title || result.name}</h2>

        <div className="flex justify-between px-4 py-2">
            <p>{handleDate(result.release_date || result.firs_air_date)}</p>
            <p className="flex items-center"><FiThumbsUp className="mr-1" /> {result.vote_count}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card;
