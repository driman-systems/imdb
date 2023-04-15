const Results = ({results}) => {
  return (
    <div>
      {results.map((result)=>(
        <div key={result.id}>
            {result.title}
        </div>
      ))}
    </div>
  )
}

export default Results
