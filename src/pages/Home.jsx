import React from 'react'
import { Link} from 'react-router-dom'
import Inputdata from "./Inputdata";
import Lottie from 'lottie-react'
import { animation,animation2,img1} from '../assets'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

import { useEffect } from 'react';


function Home() {
  return (
    <section>

      <div className='rowC'>
        <div >
              <Lottie className='w-5xl' animationData={animation}/>
        </div> 

          <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                  className="max-h-[35rem] overflow-hidden w-3/5 text-blue-400 border-2 bg-[#f9fafe] rounded-lg">
            <img src={img1} className=" pl-24 pr-24" />
              <div className='pl-96'>
                <Link to="/input-page" className=' w-1/2 bg-blue-500 hover:bg-blue-700 mb-12 text-white font-bold text-md py-2 px-4 rounded-lg'><a href="Inputdata">Import data</a></Link>
              </div>
              <div className='max-h-50px'>
                  <TypeAnimation className='pl-12 mt-8 text-lg font-mono'
                  style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                  sequence={[
                    2000,
                    `Get your medical summary now!!`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                    2000,
                    `Medical history provides you with the best report of your health with state of the art technology`,
                    2000,
                    '',
                  ]}
                  speed={20}
                  repeat={Infinity}
                />
              </div>
            
             
          </motion.div>
         
          </div>
    </section>
    
  )
}

export default Home
