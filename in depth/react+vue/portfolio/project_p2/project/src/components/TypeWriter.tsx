import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface TypeWriterProps {
  sequences: (string | number)[];
  className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ sequences, className }) => {
  return (
    <TypeAnimation
      sequence={sequences}
      wrapper="span"
      speed={40}
      className={`${className} inline-block`}
      cursor={true}
      repeat={Infinity}
    />
  );
};

export default TypeWriter;