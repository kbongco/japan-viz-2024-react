import cash from './../data/cash-used.json'
import { calculateTotal } from '../utilities/sumTotal';

export default function Visualized() {
  console.log(cash, 'test');
  const USDTotal = calculateTotal(cash, "USD");
  const JPYTotal = calculateTotal(cash, "JPY");

  return (
    <>
      <div className='mt-8'>
        <section className='grid grid-cols-2 mt-8'>
          <div className='flex justify-center items-center flex-col'>
            <h2 className='text-3xl font-bold'>Overall Spending</h2>
            <div className='mt-8'>
              <p>If you would like to see the USD version of this please use the toggle below</p>
              <p>Disclaimer: This break down does not include hotel and flight prices. This is only finances of what was spent when I was in Japan</p>
            </div>
          </div>
          <div>
            <div className='max-w-md mx-auto bg-white border-2 border-gray-300 rounded-lg p-6 shadow-lg'>
              <div className="text-center border-b-2 border-gray-300 pb-4">
                <h1 className="text-xl text-gray-600 font-bold">Expenses Broken down by Category</h1>
                <p className="text-sm text-gray-600">Japan Trip 2024 </p>
                <p className="text-sm text-gray-600">Date: October 29, 2024 - November 7, 2024</p>
              </div>
              <div className='py-4'>
                <div className='flex justify-between border-b border-gray-300 pb-2 text-sm'>
                  <span className="text-sm text-gray-600">Category</span>
                  <span className="text-sm text-gray-600">Spent</span>
                </div>
                <div className='space-y-2 text-sm'>
                  {cash.map((item, id) => (
                    <div
                      key={id}
                      className="flex justify-between border-b border-gray-200 py-2"
                    >
                      <span className="text-sm text-gray-600">{item.Category}</span>
                      <span className="text-sm text-gray-600">¥{item.JPY.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className='py-4'>
                    <div className="flex justify-between border-b border-gray-200 py-2">
                      <span className="text-sm text-gray-600"> Total</span>
                      <span className='text-md text-gray-600'>¥{JPYTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}