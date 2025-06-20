'use client'

import React from 'react'

interface ButtonProps {
  text: string
  link: string
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={text}
      className="relative inline-block px-6 py-3 rounded-full bg-white text-black text-sm font-medium transition-transform duration-200 ease-in-out hover:scale-95 overflow-hidden group"
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 rounded-full border-2 border-white scale-0 group-hover:scale-100 transition-transform duration-200 ease-in-out"></span>
    </a>
  )
}

export default Button
