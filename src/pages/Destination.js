import { useState } from "react"
import {destinations} from "../starter-code/data.json"


export default function Destination(){
    const [planets] = useState(destinations)
    const [value, setValue] = useState(0)
    const {name, images,description,distance,travel } = planets[value]

    return (
        <>
          <section className="home destinations  px-5">
              <h1 className="pt-20  text-white lg: pt-40 lg:mx-auto text-white text-4xl uppercase mb-10">01 Pick your destination</h1>
              <div className="pt-20 md:grid grid-cols-2 gap-5 md:items-center lg: max-w-7xl lg:mx-auto ">
                  <article >
                      <img src={images.png} alt={name} title={name}
                          className=" block mx-auto mb-10 "
                      />
                  </article>
                  <article className="text-center lg:text-left">
                  {planets.map((item, index) => (
                      <button key={index} onClick={()=> setValue(index)}
                      className={`uppercase text-white text-2xl pb-2 mx-2 ${index === value &&"border-b border-white"}`}
                      >
                          {item.name}
                      </button>
                  ))}
                      <h2 className="text-5xl font-bold text-white mt-10 mb-5 uppercase tracking-widest">{name}</h2>
                      <p className="text-gray-400 pb-10">{description}</p>
                      <ul className="flex items-center justify-between flex-wrap border-t border-gray-400 pt-10 ">
                          <li className="text-white text-4xl"><span className="text-2xl block">Avg. Distance</span>{distance}</li>
                          <li className="text-white text-4xl"><span className="text-2xl block">Est. Travel Time</span>{travel}</li>
                      </ul>
                  </article>
              </div>
          </section>
        </>
    )
}