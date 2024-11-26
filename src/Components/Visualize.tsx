import cash from './../data/cash-used.json'
import credit from './../data/credit-used.json';
import { calculateTotal } from '../utilities/sumTotal';
import CurrencyToggle from './Toggle';

export default function Visualized() {
  console.log(cash, 'test');
  const USDTotal = calculateTotal(cash, "USD");
  const JPYTotal = calculateTotal(cash, "JPY");
  const JPYTotalCredit = calculateTotal(credit, "JPY");
  const USDTotalCredit = calculateTotal(credit, "USD");

  return (
    <>
      <div className='mt-8'>
        <section id='overall' className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex justify-center items-center flex-col'>
            <h2 className="text-3xl font-bold mb-4">Overall Expenses </h2>
          </div>
          <div className='flex justify-center items-center'>
          <CurrencyToggle/>
          </div>
        </section>
        <section className='grid grid-cols-2 mt-8'>
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
                  {credit.map((item, id) => (
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
                      <span className='text-md text-gray-600'>¥{JPYTotalCredit.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className='py-4'>
                    <p className="text-sm text-gray-600 font-bold">Disclaimer: This is the expenditure of how much I used my credit card total during my trip. This is how much was spent in YEN.</p>
                  </div>
                </div>
              </div>
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
                  <div className='py-4'>
                    <p className="text-sm text-gray-600 font-bold">Disclaimer: This is only the cash expenditure while in Japan in JPY, this does not include credit card purchases and flights and hotel paid before the trip</p>
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