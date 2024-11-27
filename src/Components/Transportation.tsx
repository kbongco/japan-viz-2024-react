import { combineTransportationData } from "../utilities/combining-transport"
import stations from './../data/transportation-stations.json'
import transportData from './../data/transportation.json'

export default function Transportation() {
  console.log(transportData)
  console.log(stations);

  const combinedData = (stations, transportData) => {
    return transportation.map((transport) => {
      const { date, origin-station, destinationStation, JPY, USD }
    })
  }
  return ( 
    <>
<div className="p-8 grid grid-cols-3 gap-8">
  {/* Tokyo Subway Lines */}
  <div>
    <h2 className="text-2xl font-bold mb-4">Tokyo Subway Lines</h2>
    <div className="space-y-6">
      {/* Yamanote Line */}
      <div className="flex items-center space-x-4">
        <div className="h-1 w-24 bg-green-500"></div>
        <div className="flex space-x-4">
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
          <span className="text-sm">Shibuya</span>
        </div>
        <div className="flex space-x-4">
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
          <span className="text-sm">Tokyo Station</span>
        </div>
      </div>
      {/* Chuo Line */}
      <div className="flex items-center space-x-4">
        <div className="h-1 w-24 bg-blue-500"></div>
        <div className="flex space-x-4">
          <div className="h-4 w-4 rounded-full bg-blue-500"></div>
          <span className="text-sm">Shinjuku</span>
        </div>
        <div className="flex space-x-4">
          <div className="h-4 w-4 rounded-full bg-blue-500"></div>
          <span className="text-sm">Tokyo Dome</span>
        </div>
      </div>
    </div>
  </div>

  {/* Osaka Subway Lines */}
  <div>
    <h2 className="text-2xl font-bold mb-4">Osaka Subway Lines</h2>
    <div className="space-y-6">
      {/* Midosuji Line */}
      <div className="flex items-center space-x-4">
        <div className="h-1 w-24 bg-red-500"></div>
        <div className="flex space-x-4">
          <div className="h-4 w-4 rounded-full bg-red-500"></div>
          <span className="text-sm">Namba</span>
        </div>
        <div className="flex space-x-4">
          <div className="h-4 w-4 rounded-full bg-red-500"></div>
          <span className="text-sm">Umeda</span>
        </div>
      </div>
      {/* Tanimachi Line */}
      <div className="flex items-center space-x-4">
        <div className="h-1 w-24 bg-yellow-500"></div>
        <div className="flex space-x-4">
          <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
          <span className="text-sm">Osaka Castle</span>
        </div>
        <div className="flex space-x-4">
          <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
          <span className="text-sm">Tanimachi</span>
        </div>
      </div>
    </div>
  </div>

  {/* Yokohama, Hakone, and Shinkansen Lines */}
  <div>
    <h2 className="text-2xl font-bold mb-4">Other Lines</h2>
    <div className="space-y-6">
      {/* Yokohama Line */}
      <div className="flex items-center space-x-4">
        <div className="h-1 w-24 bg-purple-500"></div>
        <div className="flex space-x-4">
          <div className="h-4 w-4 rounded-full bg-purple-500"></div>
          <span className="text-sm">Sakuragicho</span>
        </div>
        <div className="flex space-x-4">
          <div className="h-4 w-4 rounded-full bg-purple-500"></div>
          <span className="text-sm">Minato Mirai</span>
        </div>
      </div>
      {/* Hakone Line */}
      <div className="flex items-center space-x-4">
        <div className="h-1 w-24 bg-teal-500"></div>
        <div className="flex space-x-4">
          <div className="h-4 w-4 rounded-full bg-teal-500"></div>
          <span className="text-sm">Hakone-Yumoto</span>
        </div>
        <div className="flex space-x-4">
          <div className="h-4 w-4 rounded-full bg-teal-500"></div>
          <span className="text-sm">Gora</span>
        </div>
      </div>
      {/* Shinkansen */}
      <div className="flex items-center space-x-4">
        <div className="h-1 w-24 bg-gray-700"></div>
        <div className="flex space-x-4">
          <div className="h-4 w-4 rounded-full bg-gray-700"></div>
          <span className="text-sm">Tokyo</span>
        </div>
        <div className="flex space-x-4">
          <div className="h-4 w-4 rounded-full bg-gray-700"></div>
          <span className="text-sm">Shin-Osaka</span>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}