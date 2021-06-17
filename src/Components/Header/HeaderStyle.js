// import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
  
export const AudioWrapper = styled.div`
 
  width: 1200px;
  background: #fff;
  z-index: 15;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1200px) {
    position: fixed;
    right: 35px;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

export const Back = styled.div`

`;

  
export const PlayButton = styled.span`
  display: ${props => props.className ? "inline-block" : "none"};
  background: url("images/mute.jpg") no-repeat -4px 0;
  width: 23px;
  border: none;
  cursor: pointer;
  font-size: 0;
  line-height: 0;
  height: 40px;
  background-size: 50px;
  right: 0;
`;
  
export const StopButton = styled.span`
  display: ${props => props.className ? "inline-block" : "none"};
  background: url("images/mute.jpg") no-repeat -25px 0;
  width: 23px;
  border: none;
  cursor: pointer;
  font-size: 0;
  line-height: 0;
  height: 40px;
  background-size: 50px;
  right: 0;
`;
  
export const AudioBlk = styled.audio`

`;