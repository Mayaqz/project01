export function Quote({author, quote}){
    const color = ["rgb(22 163 74)","rgb(7 89 133)","rgb(55 95 81)","rgb(38 78 68)","rgb(7 89 133)","rgb(217 119 6)"]
    const randomId = Math.floor(Math.random()*6)
        
    return(
        <div style={{backgroundColor:color[randomId]}} className="w-1/4 p-4 m-3 rounded-bl-2xl border-neutral-900 border-2">
            <h2 className=" text-stone-200">

                {quote}
                <div className=" font-bold text-right">
               -{author}     
                </div>
               
            </h2>
        </div>
    )
}