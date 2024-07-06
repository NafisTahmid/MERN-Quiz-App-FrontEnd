import React from 'react';
import Questions from './Questions';
import { useEffect } from 'react';

// redux store import
import {useSelector} from 'react-redux';

export default function Quiz() {

  const state = useSelector(state => state)

  useEffect(() => {
    console.log(state)
  })

  function onPrev() {
    console.log("On prev clicked!")
  }
  function onNext() {
    console.log("On next clicked!");
  }
  return (
    <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        {/* quiz question */}
        <Questions/>

        <div className="grid">
          <button className="btn prev" onClick={onPrev}>Prev</button>
          <button className="btn next" onClick={onNext}>Next</button>
        </div>
    </div>
  )
}
