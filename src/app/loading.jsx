import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-96">
        <Image src="loading.svg" alt="loading..." width={80} height={80} />
    </div>
  )
}

export default Loading
