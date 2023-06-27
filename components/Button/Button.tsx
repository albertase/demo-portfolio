import React, { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>
      {children}
    </button>
  );
};

export default Button;