import { React, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


function Faq() {
  const [expand, setExpand] = useState(false)
  const expandClass = expand ? 'display' : 'hidden';
  const colorChange = expand ? 'text-blue-800' : 'text-black';


  const [secondExpand, setSecondExpand] = useState(false)
  const secondExpandClass = secondExpand ? 'display' : 'hidden';
  const colorChangeTwo = secondExpand ? 'text-blue-800' : 'text-black';


  const [thirdExpand, setThirdExpand] = useState(false)
  const thirdExpandClass = thirdExpand ? 'display' : 'hidden';
  const colorChangeThree = thirdExpand ? 'text-blue-800' : 'text-black';


  const [forthExpand, setforthExpand] = useState(false)
  const forthExpandClass = forthExpand ? 'display' : 'hidden';
  const colorChangeFour = forthExpand ? 'text-blue-800' : 'text-black';


  const [fifthExpand, setfifthExpand] = useState(false)
  const fifthExpandClass = fifthExpand ? 'display' : 'hidden';
  const colorChangeFive = fifthExpand ? 'text-blue-800' : 'text-black';



  return (
    <div className='py-10 md:px-28 px-5 mx-auto'>
      <h1 className='text-3xl font-bold text-black text-left'>FAQ</h1>
      <div className='py-10'>
        <div className='border-b'>
          <div className='px-4 py-8 text-xl relative font-medium flex' onClick={() => setExpand(!expand)}>
            <div className={`${colorChange} text-left font-semi-bold`}>
              01
            </div>
            <div className='text-left text-base font-semibold w-5/6 text-black pl-12'>
              Maecenas efficitur scelerisque lorem?
            </div>
            <button aria-label='question-expander' className='text-xl absolute top-4 right-0 p-4 fous:outline-none'>
              {expand ?
                <IoIosArrowUp className='w-5' />
                :
                <IoIosArrowDown className='w-5' />

              }
            </button>
          </div>
          <div className={`${expandClass} pb-4 text-left text-sm font-semibold text-gray-500 pl-20`}>
            Nillam bibendum diam diam, maximus malesuada tortor volutpat sit amet. Curabitur volutpat
            feugiat tellus, sit amet faucibus massa vulputate lobortis. Vestibulum malesuada ex dolor,
          </div>
        </div>

        <div className='border-b'>
          <div className='px-4 py-8 text-xl relative font-medium flex' onClick={() => setSecondExpand(!secondExpand)}>
            <div className={`${colorChangeTwo} text-left font-semi-bold`}>
              02
            </div>
            <div className='text-left text-base font-semibold w-5/6 text-black pl-12'>
              Pellentesque ultricies nulla sit amet ipsum kra pellentesque?
            </div>
            <button aria-label='question-expander' className='text-xl absolute top-4 right-0 p-4 fous:outline-none'>
              {secondExpand ?
                <IoIosArrowUp className='w-5' />
                :
                <IoIosArrowDown className='w-5' />

              }
            </button>
          </div>
          <div className={`${secondExpandClass} pb-4 text-left text-sm font-semibold text-gray-500 pl-20`}>
            Nillam bibendum diam diam, maximus malesuada tortor volutpat sit amet. Curabitur volutpat
            feugiat tellus, sit amet faucibus massa vulputate lobortis. Vestibulum malesuada ex dolor,
          </div>
        </div>

        <div className='border-b'>
          <div className='px-4 py-8 text-xl relative font-medium flex' onClick={() => setThirdExpand(!thirdExpand)}>
            <div className={`${colorChangeThree} text-left font-semi-bold`}>
              03
            </div>
            <div className='text-left text-base font-semibold w-5/6 text-black pl-12'>
              Nullam bibendum diam diam, maximus malesuada?
            </div>
            <button aria-label='question-expander' className='text-xl absolute top-4 right-0 p-4 fous:outline-none'>
              {thirdExpand ?
                <IoIosArrowUp className='w-5' />
                :
                <IoIosArrowDown className='w-5' />

              }
            </button>
          </div>
          <div className={`${thirdExpandClass} pb-4 text-left text-sm font-semibold text-gray-500 pl-20`}>
            Nillam bibendum diam diam, maximus malesuada tortor volutpat sit amet. Curabitur volutpat
            feugiat tellus, sit amet faucibus massa vulputate lobortis. Vestibulum malesuada ex dolor,
          </div>
        </div>

        <div className='border-b'>
          <div className='px-4 py-8 text-xl relative font-medium flex' onClick={() => setforthExpand(!forthExpand)}>
            <div className={`${colorChangeFour} text-left font-semi-bold`}>
              04
            </div>
            <div className='text-left text-base font-semibold w-5/6 text-black pl-12'>
              Vivamus eleifend nec felis vel auctor?
            </div>
            <button aria-label='question-expander' className='text-xl absolute top-4 right-0 p-4 fous:outline-none'>
              {forthExpand ?
                <IoIosArrowUp className='w-5' />
                :
                <IoIosArrowDown className='w-5' />

              }
            </button>
          </div>
          <div className={`${forthExpandClass} pb-4 text-left text-sm font-semibold text-gray-500 pl-20`}>
            Nillam bibendum diam diam, maximus malesuada tortor volutpat sit amet. Curabitur volutpat
            feugiat tellus, sit amet faucibus massa vulputate lobortis. Vestibulum malesuada ex dolor,
          </div>
        </div>

        <div >
          <div className='px-4 py-8 text-xl relative font-medium flex' onClick={() => setfifthExpand(!fifthExpand)}>
            <div className={`${colorChangeFive} text-left font-semi-bold`}>
              05
            </div>
            <div className='text-left text-base font-semibold w-5/6 text-black pl-12'>
              Vivamus eleifend nec felis vel auctor?
            </div>
            <button aria-label='question-expander' className='text-xl absolute top-4 right-0 p-4 fous:outline-none'>
              {fifthExpand ?
                <IoIosArrowUp className='w-5' />
                :
                <IoIosArrowDown className='w-5' />

              }
            </button>
          </div>
          <div className={`${fifthExpandClass} pb-4 text-left text-sm font-semibold text-gray-500 pl-20`}>
            Nillam bibendum diam diam, maximus malesuada tortor volutpat sit amet. Curabitur volutpat
            feugiat tellus, sit amet faucibus massa vulputate lobortis. Vestibulum malesuada ex dolor,
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq