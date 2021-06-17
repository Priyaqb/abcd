// import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
  
export const SongDetailWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 80px 20px 0;

    @media (max-width: 1200px) {
        flex-direction: column;
        padding-top: 0;
    }

    .lyrics img {
        max-width: clamp(200px, 100%, 400px);
    }

    h3 {
        color: #32dcdc;
        margin: 0 0 20px;
        font-size: 44px;
    }

    .iframeWrapper {
        width: 100%;

        iframe {
            max-width: 100%;
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
   
`;
  

