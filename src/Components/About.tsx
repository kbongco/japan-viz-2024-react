export default function About() {
  return (
    <>
      <div className='mt-8'>
        <section id="stats" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='flex justify-center items-center flex-col'>
            <h2 className="text-3xl font-bold mb-4">Basic and Fun Stats</h2>
          </div>

          <div className="flex flex-row justify-center items-star gap-x-1">
            <span className="text-4xl">152💴 (JPY)</span>
            <span className='text-4xl'>=</span>
            <span className="text-4xl">1💵 (USD)</span>
          </div>
        </section>
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="flex flex-col items-center bg-blue-100 text-blue-700 p-4 rounded-lg shadow">
            <span className="text-4xl">🛬</span>
            <h2 className="text-lg font-semibold mt-2">Flight Duration</h2>
            <p className='text-lg'>EWR to NRT</p>
            <p className="text-xl font-bold mt-1">14hours</p>
          </div>
          <div className="flex flex-col items-center bg-blue-100 text-blue-700 p-4 rounded-lg shadow">
            <span className="text-4xl">🔥</span>
            <h2 className="text-lg font-semibold mt-2">Most Expensive Meal</h2>
            <p className='text-lg'>Yakiniku</p>
            <p className="text-xl font-bold mt-1">¥5000</p>
          </div>
          <div className="flex flex-col items-center bg-blue-100 text-blue-700 p-4 rounded-lg shadow">
            <span className="text-4xl">🚄</span>
            <h2 className="text-lg font-semibold mt-2">Longest Journey</h2>
            <p className='text-lg'>Tokyo to Osaka</p>
            <p className="text-xl font-bold mt-1">515 km</p>
          </div>
          <div className="flex flex-col items-center bg-blue-100 text-blue-700 p-4 rounded-lg shadow">
            <span className="text-4xl">🎮🕹️🎶</span>
            <h2 className="text-lg font-semibold mt-2">Most played Arcade Game</h2>
            <p className='text-lg'>Dance Rush Stardom</p>
            <p className="text-xl font-bold mt-1">8 times</p>
          </div>
          <div className="flex flex-col items-center bg-blue-100 text-blue-700 p-4 rounded-lg shadow">
            <span className="text-4xl">🧸</span>
            <h2 className="text-lg font-semibold mt-2">Crane game prizes won</h2>
            <p className='text-lg'>7 prizes</p>
          </div>
          <div className="flex flex-col items-center bg-blue-100 text-blue-700 p-4 rounded-lg shadow">
            <span className="text-4xl">🏙️🏯 </span>
            <h2 className="text-lg font-semibold mt-2">Favorite City</h2>
            <p className='text-lg'>Osaka</p>
          </div>
          <div className="flex flex-col items-center bg-blue-100 text-blue-700 p-4 rounded-lg shadow">
            <span className="text-4xl">🍺</span>
            <h2 className="text-lg font-semibold mt-2">Favorite Drink</h2>
            <p className='text-lg'>Whiskey Highballs</p>
          </div>
          <div className="flex flex-col items-center bg-blue-100 text-blue-700 p-4 rounded-lg shadow">
            <span className="text-4xl">🌎🎢</span>
            <h2 className="text-lg font-semibold mt-2">Biggest disappointment</h2>
            <p className='text-lg'>Universal Studios</p>
            <p className="text-xl font-bold mt-1">No nintendo world :(</p>
          </div>
          <div className="flex flex-col items-center bg-blue-100 text-blue-700 p-4 rounded-lg shadow">
            <span className="text-4xl">🏪🍙🥞</span>
            <h2 className="text-lg font-semibold mt-2">Favorite Konbini</h2>
            <p className='text-lg'>Lawsons</p>
          </div>
          <div className="flex flex-col items-center bg-blue-100 text-blue-700 p-4 rounded-lg shadow">
            <span className="text-4xl">🏋️‍♀️</span>
            <h2 className="text-lg font-semibold mt-2">Heaviest Weight Lifted</h2>
            <p className='text-lg'>177.5kg</p>
            <p className="text-xl font-bold mt-1">Deadlift</p>
          </div>
          <div className="flex flex-col items-center bg-blue-100 text-blue-700 p-4 rounded-lg shadow">
            <span className="text-4xl">🛍️🎉🏬 </span>
            <h2 className="text-lg font-semibold mt-2">Most expensive souvenirs</h2>
            <p className='text-lg'>Donki</p>
            <p className="text-xl font-bold mt-1">¥20000</p>
          </div>
          <div className="flex flex-col items-center bg-blue-100 text-blue-700 p-4 rounded-lg shadow">
            <span className="text-4xl">🏙️🛍️🎮</span>
            <h2 className="text-lg font-semibold mt-2">Favorite District</h2>
            <p className='text-lg'>Ikebukuro</p>
          </div>
        </div>
      </div>
    </>
  )
}