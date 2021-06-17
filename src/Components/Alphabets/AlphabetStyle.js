// import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

export const LetterSection = styled.section`
    width: 800px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    padding: 25px 0;

    .letter-wrapper {
		margin-left: -25px;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
    }
    
    .flip-letter {
		perspective: 1000px;
		width: 180px;
		height: 180px;
		text-align: center;
		cursor: pointer;
	}

	.flip-letter-inner {
		transition: transform 0.6s;
		transform-style: preserve-3d;
	}
	
    .flip-letter:hover .flip-letter-inner,
    .flip-letter:focus .flip-letter-inner {
		transform: rotateY(180deg);
    }
    @media(hover: hover) and (pointer: fine) {
        .flip-letter:hover .flip-letter-inner,
        .flip-letter:focus .flip-letter-inner {
        	transform: rotateY(180deg);
        }
    }
	
    .flip-letter-front, 
    .flip-letter-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
	
	.flip-letter-back {
		transform: rotateY(180deg);
		img {
			width:150px;
			height:150px;   
		}
	}

    & span {
	font-size: 155px;
	margin-left: 20px;
      cursor: pointer;
      padding-right: 20px;
      padding-left: 20px;
	}
	
	& span.yellow {
        background: -webkit-linear-gradient(#FFBB16, 	#d42926);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
	}

	& span.green {
        background: -webkit-linear-gradient(#6BAC1A, #FFA500);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
	}

	& span.blue {
        background: -webkit-linear-gradient(#42EADDFF, #CDB599FF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
	}

	& span.red {
        background: -webkit-linear-gradient(#FC766AFF, #5B84B1FF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
	}

	& span.pink {
		background: -webkit-linear-gradient(#FFD662FF, #00539CFF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
	}

	@media (max-width: 992px) {
		.letter-section {
			width: 600px;
		}
    }
    @media (max-width: 1375px) {
        .stage {
                display: none;
            }
    }

	@media (max-width: 1200px) {
		width: 100%;
		padding: 0 15px;
		box-sizing: border-box;

		& .letter-wrapper {
			margin-left: 0;;
		}
		.balloon {
			display: none;
		}
	}
`;


