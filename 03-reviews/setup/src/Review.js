import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  console.log(people.size)
  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img'/>
      <span className="quote-icon">
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className='prev-btn' onClick={()=>{
        if(index === 0) {setIndex(people.length-1)}
        else {setIndex(index-1)}
      }}>
        <FaChevronLeft/>
      </button>
      <button className="next-btn" onClick={()=>{
        if(index === people.length-1) {setIndex(0)}
        else {setIndex(index+1)}
      }}>
        <FaChevronRight/>
      </button>
    </div>
    <button className="random-btn" onClick={()=>{
      let number = Math.floor(Math.random() * 4);
      setIndex(number)
    }}>Surprise me </button>
  </article>;
};

export default Review;
