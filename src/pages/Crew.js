import { useState } from "react"
import {crew} from "../starter-code/data.json"
import {BsCircle} from "react-icons/bs"


export default function  Crew() {

    const [people] = useState(crew)
    const [value, setValue] = useState(0)
    const {name, images,role,bio } = people[value]

    return (
        <>
          <section className="home crew px-5">
              <h1 className="pt-20  text-white lg: pt-40 lg:mx-auto text-white text-4xl uppercase mb-10">02 Pick your crew</h1>
              <div className="flex ite ms-center justify-center flex-col-reverse pt-20 md:grid grid-cols-2 gap-5 md:items-center lg: max-w-7xl lg:mx-auto ">
                  
                  <article className="text-center lg:text-left">
                 <h4 className="uppercase text-gray-400 mb-5 text-2xl">{role}</h4>
                      <h2 className="text-5xl font-bold text-white mt-10 mb-5 uppercase tracking-widest">{name}</h2>
                      <p className="text-gray-400 pb-10">{bio}</p>
                      {people.map((item, index) => (
                      <button key={index} onClick={()=> setValue(index)}
                      className={`uppercase text-white text-2xl h-6 pb-2 mx-2 ${index === value &&"bg-white rounded-full"}`}
                      >
                        <BsCircle />
                      </button>
                  ))}
                     
                  </article>

                  <article>
                      <img src={images.png} alt={name} title={name}
                          className=" block mx-auto mb-10 "
                      />
                  </article>
              </div>
          </section>
        </>
    )
}