import Link from "next/link";
import Image from "next/image";
import {FiThumbsUp} from 'react-icons/fi'

const Card = ({result}) => {

  const handleDate = (date)=>{
    const res = new Date(date);

    return res.toLocaleDateString();
}

  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md 
    rounded-lg sm:border-slate-400 sm:m-2 transition-shadow duration-200
    group
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

        <div className="p-2 border-b-2 border-b-slate-600">
            <p className="line-clamp-2 text-md">{result.overview}</p>
        </div>

        <h2 className="font-bold truncate font-lg py-2">{result.title || result.name}</h2>

        <div className="flex justify-between">
            <p>{handleDate(result.release_date || result.firs_air_date)}</p>
            <p className="flex items-center"><FiThumbsUp className="mr-1" /> {result.vote_count}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card;
