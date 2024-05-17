import React from 'react'
import Accordion from './Accordion'
const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
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

      </div>
  )
}

export default Faq