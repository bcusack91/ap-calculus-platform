'use client'

interface UnitCircleAngle {
  degrees: string
  radians: string
  point: string
  cos: string
  sin: string
  tan: string
}

const angles: UnitCircleAngle[] = [
  {
    degrees: '0°',
    radians: '0',
    point: '(1, 0)',
    cos: '1',
    sin: '0',
    tan: '0'
  },
  {
    degrees: '30°',
    radians: 'π/6',
    point: '(√3/2, 1/2)',
    cos: '√3/2',
    sin: '1/2',
    tan: '√3/3'
  },
  {
    degrees: '45°',
    radians: 'π/4',
    point: '(√2/2, √2/2)',
    cos: '√2/2',
    sin: '√2/2',
    tan: '1'
  },
  {
    degrees: '60°',
    radians: 'π/3',
    point: '(1/2, √3/2)',
    cos: '1/2',
    sin: '√3/2',
    tan: '√3'
  },
  {
    degrees: '90°',
    radians: 'π/2',
    point: '(0, 1)',
    cos: '0',
    sin: '1',
    tan: 'undefined'
  }
]

export default function UnitCircleTable() {
  return (
    <div className="my-8 overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden border-2 border-blue-300 rounded-xl shadow-lg">
          <table className="min-w-full divide-y-2 divide-blue-200">
            <thead className="bg-gradient-to-r from-blue-600 to-purple-600">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                  Degrees
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                  Radians
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                  Point (x, y)
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                  cos θ
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                  sin θ
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                  tan θ
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-blue-100 dark:divide-gray-700">
              {angles.map((angle, index) => (
                <tr 
                  key={index}
                  className={`transition-colors hover:bg-blue-50 dark:hover:bg-gray-800 ${
                    index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-900'
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-blue-900">
                    {angle.degrees}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-mono text-purple-700">
                    {angle.radians}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-mono text-gray-700">
                    {angle.point}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-mono text-green-700">
                    {angle.cos}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-mono text-orange-700">
                    {angle.sin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-mono text-pink-700">
                    {angle.tan}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-4 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-700 rounded"></div>
            <span className="text-gray-700">cosine (x-coordinate)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-700 rounded"></div>
            <span className="text-gray-700">sine (y-coordinate)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-pink-700 rounded"></div>
            <span className="text-gray-700">tangent (sin/cos)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
