import { Quote, Todo } from "@/components/Quote";
import { checkIsOnDemandRevalidate } from "next/dist/server/api-utils";
import { useEffect, useState } from "react";


export default function Home() {
  const [list, setList] = useState([

  ])
  // const array1=[<Todo/>];

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then(res => res.json())
      .then(json => setList(json.quotes))
  }, [])
  console.log(list)
  return (
    <div className="bg-white">
      <div>


        <div className="flex flex-wrap justify-center">
        {list.map((element)=>(
          <Quote author={element.author} quote={element.quote} />
        ))}
        </div>
      </div>

    </div>
  )
}