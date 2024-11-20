import { statsData } from "../data/funstats"
import Card from "./Card"

export default function About() {
  return (
    <>
      <div className='mt-8'>
        <section id="stats" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='flex justify-center items-center flex-col'>
            <h2 className="text-3xl font-bold mb-4">Basic and Fun Stats</h2>
            <p>Some random and fun stats during my trip</p>
          </div>

          <div className="flex flex-row justify-center items-star gap-x-1">
            <span className="text-4xl">152💴 (JPY)</span>
            <span className='text-4xl'>=</span>
            <span className="text-4xl">1💵 (USD)</span>
          </div>
        </section>
        <div className="flex gap-4 flex-wrap justify-center">
        {statsData.map((stat) => (
          <Card
            key={stat.id} 
            icon={stat.icon}
            title={stat.title}
            description={stat.description}
            value={stat.value}
          />
        ))}
        </div>
      </div>
    </>
  )
}