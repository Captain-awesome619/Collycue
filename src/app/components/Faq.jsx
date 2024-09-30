import React from 'react'
import Accordion from './Accordion'
import { motion } from 'framer-motion';
const Faq = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 15 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay:0.5 }}
    viewport={{once: true}}
    className='flex flex-col items-center justify-centerbg-[url("/assests/display2.png")]'>
<div className="flex flex-col justify-center ">
<Accordion
        title="Is there an app to change your hair color?"
        answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Autem voluptatem deleniti ab aliquid pariatur! Atque aliquid totam consequatur deleniti sed."
      />
      <Accordion
        title="How can I see what I look like with different hair colors?"
        answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Autem voluptatem deleniti ab aliquid pariatur! Atque aliquid totam consequatur deleniti sed."
      />
      <Accordion title="How can I order an hairstyle of my choice?"
      answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Autem voluptatem deleniti ab aliquid pariatur! Atque aliquid totam consequatur deleniti sed." />
      <Accordion title="Which hair color looks best on me?"
      answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Autem voluptatem deleniti ab aliquid pariatur! Atque aliquid totam consequatur deleniti sed." />
      </div>

      </motion.div>
  )
}

export default Faq