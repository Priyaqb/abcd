// import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
  
export const DetailsWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    padding: 0;
    flex-direction: column;

  .content-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-grow: 1;
    padding-top: 80px;
    @media (max-width: 1200px) {
        flex-direction: column;
        padding-top: 0;
    }
  }

  .left-blk{
      width: 350px;
      padding: 20px;
      align-self: center;

      @media (max-width: 1200px) {
        width: 100%;
      }

      img {
          max-width: clamp(200px, 100%, 400px);
      }
  }
  .right-blk {
        width: 250px;
        position: relative;
        text-align: center;

        @media (max-width: 1200px) {
            width: 100%;
            text-align: left;

            h3 {
                padding-left: 40px;
            }
        }
    }

    ul {
        list-style: none;
    }

    h3 {
        margin-bottom: 20px;
    }

    li {
        margin-bottom: 20px;
        cursor: pointer;
        text-align: left;
        color: #000;
        padding-bottom: 13px;
        font-size: 18px;
        padding-left: 50px;
        display: flex;
        padding-top: 8px;
        align-items: center;

        &.active {
            cursor: default;
        }

        &.active,
        &:hover {
            color: #c3292d;
        }

        &.vehicle-ico {
            background: url("images/vehicle-icon.png") no-repeat 0 0;
            background-size: 40px auto;
        }

        &.food-ico {
            background: url("images/fruit-icon.png") no-repeat 0 0;
            background-size: 40px auto;
        }

        &.animal-ico {
            background: url("images/animal-icon.png") no-repeat 0 0;
            background-size: 40px auto;
        }

        &.disney-ico {
            background: url("images/disney-icon.png") no-repeat 0 0;
            background-size: 40px auto;
        }

        &.music {
            background: url("images/music-icon.png") no-repeat 0 0;
            background-size: 40px auto;
        }

        a {
            text-decoration: none;
            color: #000;
        }
    }
    .arrow {
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;

        &.right {
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
        }
    }

    .text {
        span {
            font-size: 34px;
            margin: 0 20px;

            &:first-child {
                color: #B207B6;
                font-size: 44px;
            }
            &:last-child {
                color: #46D604;
                font-size: 44px;
                white-space: nowrap;
            }
        }
        
    }

    .pagination {
        margin: 40px 0;
        font-size: 35px;
        cursor: pointer;

        span{
            color:#dc3232;

            &.prev {
                margin-right: 35px;
            }
        }
    }

    
  }
`;
  

