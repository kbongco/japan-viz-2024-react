import { CardInterface } from "../interfaces/component-interface";

export default function Card({ icon, title, description, value }: CardInterface) {
  return ( 
    <>
    <div className="flex flex-col items-center bg-blue-100 text-blue-700 p-4 rounded-lg shadow">
      <span className="text-4xl">{icon}</span>
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-lg">{description}</p>
      <p className="text-xl font-bold mt-1">{value}</p>
    </div>
    </>
  )
}