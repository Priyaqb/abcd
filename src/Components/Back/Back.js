import React from 'react';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import {
  BackBtn
} from './BackStyle';


function Back() {
  const location = useLocation().pathname;
  let history = useHistory();


  console.log(useLocation().pathname);

  
  
  function handleClick() {
    //history.goBack()
    if(location === "/details") {
      history.push("/")
    } else if(location === "/song-details") {
      history.push("/details")
    }
  }

  return (
    <BackBtn>
      {location !== '/' &&
        <button className="back" type="button" onClick={handleClick}>
          Back
        </button>
      }
    </BackBtn>
  );
}

export default Back;