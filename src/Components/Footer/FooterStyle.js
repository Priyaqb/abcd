// import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

export const Footer = styled.div`
    @media (max-width: 1200px) {
      display: none;
    }

    .balloon {
      display:inline-block;
      width:120px;
      height:145px;
      background:hsl(215,50%,65%);
      border-radius:80%;
      position:fixed;
      box-shadow:inset -10px -10px 0 rgba(0,0,0,0.07);
      margin:20px 30px;
      transition:transform 0.5s ease;
      z-index:10;
      animation:balloons 4s ease-in-out infinite;
      transform-origin:bottom center;
      text-align: center;
      bottom: 176px;
      
      @media (max-width: 1200px) {
        display: none;
      }
    }
	
    @keyframes balloons {
      0%,100%{ transform:translateY(0) rotate(-4deg); }
      50%{ transform:translateY(-25px) rotate(4deg); }
    }
	
	
    .balloon:before {
      content:"\\25B2";
      font-size:20px;
      color:hsl(215,30%,50%);
      display:block;
      text-align:center;
      width:100%;
      position:absolute;
      bottom:-12px;
      z-index:-100;
    }
    
    .balloon:after {
      display:inline-block; 
      top:153px;
      position:absolute;
      height:250px;
      width:1px;
      margin:0 auto;
      content:"";
      background:rgba(0,0,0,0.2); 
    }
    
    .balloon:nth-child(1){ background:hsl(245,40%,65%); animation-duration:3.5s; left: -2%;}
    .balloon:nth-child(1):before { color:hsl(245,40%,65%);  }
    
    .balloon:nth-child(2){ background:hsl(139,50%,60%); animation-duration:3s; left: inherit; left: 5%;}
    .balloon:nth-child(2):before { color:hsl(139,30%,50%);  }
    
    .balloon:nth-child(3){ background:hsl(59,50%,58%); animation-duration:4.5s; left: inherit; right: 5%;}
    .balloon:nth-child(3):before { color:hsl(59,30%,52%);  }

    .balloon:nth-child(4){ background:hsl(23,55%,57%); animation-duration:5s; right: -2%; }
    .balloon:nth-child(4):before { color:hsl(23,44%,46%);  }
    .stage {
    display: flex;
    height: 200px;
    width: 200px;
    position: fixed;
    bottom: 0;
  }
  .stage.right-blk {
    right: 13%;
  }
  .stage.left-blk {
    left: 13%;
  }
  .box {
      align-self: flex-end;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      background-color: #F44336;
      height: 200px;
      margin: 0 auto 0 auto;
      transform-origin: bottom;
      width: 200px;
  }
  .bounce-6 {
      animation-name: bounce-6;
      animation-timing-function: ease;
  }
  @keyframes bounce-6 {
      0%   { transform: scale(1,1)      translateY(0); }
      10%  { transform: scale(1.1,.9)   translateY(0); }
      30%  { transform: scale(.9,1.1)   translateY(-100px); }
      50%  { transform: scale(1.05,.95) translateY(0); }
      57%  { transform: scale(1,1)      translateY(-7px); }
      64%  { transform: scale(1,1)      translateY(0); }
      100% { transform: scale(1,1)      translateY(0); }
  }
`;


