import { useState } from "react"
import { technology } from "../starter-code/data.json"

export default function Technology() {
    const [cards] = useState(technology)
    const [value, setValue] = useState(0)
    const { name, images, description } = cards[value]

    return (
        <>

            <section className="home technology px-5">
                <h1 className="pt-20  text-white lg: pt-40 lg:mx-auto text-white text-4xl uppercase mb-10">03 space launch 101</h1>
                <div className="flex items-center justify-center flex-col-reverse pt-20 md:grid grid-cols-2 gap-5 md:items-center lg: max-w-7xl lg:mx-auto ">

                    <article className="text-center lg:text-left">
                       
                       <h4 className="uppercase text-gray-400 mb-5 text-2xl">the terminology</h4>
                        <div className="lg:flex flex-row-reverse items-center justify-content">
                        <div className="ml-5">
                        <h2 className="text-5xl font-bold text-white mt-10 mb-5 uppercase tracking-widest">{name}</h2>
                        <p className="text-gray-400 pb-10">{description}</p>
                        </div>
                       <div  className="mr-2">
                       {cards.map((item, index) => (
                            <button key={index} onClick={() => setValue(index)}
                                className={`uppercase text-white text-2xl h-12 w-12 p-2 rounded-full border-2 border-white  m-2 ${index === value && "bg-white text-gray-800 "}`}
                            >{index + 1}</button>
                        ))}
                       </div>
                        </div>
                      

                    </article>
                    <article >
                    <picture>
                        <source media="(min-width:768px )" srcSet={images.portrait} />
                        <img src={images.landscape} alt={name} title={name}
                            className=" block mx-auto mb-10 "
                        />
                    </picture>

                </article>
                </div>




                
            </section>


        </>
    )
}