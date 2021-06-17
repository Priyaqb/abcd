import React from 'react';
import Back from '../Back/Back'
import {
    AudioWrapper,
    PlayButton,
    StopButton,
    AudioBlk
  } from './HeaderStyle';

class header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlay: false,
            isStop: true,
            lastItem: '/'
        };

        // This binding is necessary to make `this` work in the callback
        this.handlePlayClick = this.handlePlayClick.bind(this);
        this.handleStopClick = this.handleStopClick.bind(this);
    }
    
    handlePlayClick() {
        this.setState(state => ({
            isPlay: !state.isPlay,
            isStop: !state.isStop
        }));
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.pause()
    }

    handleStopClick() {
        this.setState(state => ({
            isPlay: !state.isPlay,
            isStop: !state.isStop
        }));
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }

    render(props) {
        return (
            <AudioWrapper>
                <Back />
                <PlayButton onClick={this.handlePlayClick} className={this.state.isPlay ? 'active' : ''}>PLAY</PlayButton>
                <StopButton onClick={this.handleStopClick} className={this.state.isStop ? 'active' : ''}>Stop</StopButton>
                <AudioBlk id="audio" className="audio-element" autoplay>
                    <source src="audio/abcd.mp3" controls type="audio/mp3"></source>
                </AudioBlk>
            </AudioWrapper>
        )
    }
}

export default header;