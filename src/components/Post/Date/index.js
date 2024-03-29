import React from 'react';
import { DateSvg } from '../../../utils/svg';

const Date = props => {
  return (
    <div className='flex items-center text-xs mb-2 ml-1'>
      <DateSvg />
      <span className='text-indigo-400'>{props.date}</span>
    </div>
  );
};

export default Date;
