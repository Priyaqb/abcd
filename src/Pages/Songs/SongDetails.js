import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../Components/data/data.json';
import {
    SongDetailWrapper
} from './SongStyle';

class SongDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSongs: data.filter(item => item.key === (localStorage.getItem('keyVal') !== undefined ? localStorage.getItem('keyVal') : 'a'))[0],
            prevIndex: 0,
            nextIndex: 1,
            imagePath: "",
            isLyrics: 0,
            isVideo: 0
        };

        // this.handleClick = this.handleClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
    }

    componentDidMount() {

        this.setState(state => ({
            prevIndex: data.findIndex(obj => obj.key === this.state.dataSongs.key) - 1,
            nextIndex: data.findIndex(obj => obj.key === this.state.dataSongs.key) + 1,
            isLyrics: this.state.dataSongs.song.lyrics.length,
            isVideo: this.state.dataSongs.song.link.length
        }));
        window.scrollTo(0, 0);
    }

    handlePrevClick = () => {
        localStorage.setItem('keyVal', this.getKey(this.state.prevIndex));
        this.setState(state => ({
            dataSongs: data.filter(item => item.key === (localStorage.getItem('keyVal') !== undefined ? localStorage.getItem('keyVal') : 'a'))[0],
            prevIndex: this.state.prevIndex - 1,
            nextIndex: this.state.nextIndex - 1
        }));
        window.scrollTo(0, 0);
    }

    handleNextClick = () => {
        localStorage.setItem('keyVal', this.getKey(this.state.nextIndex));
        this.setState(state => ({
            dataSongs: data.filter(item => item.key === (localStorage.getItem('keyVal') !== undefined ? localStorage.getItem('keyVal') : 'a'))[0],
            prevIndex: this.state.prevIndex + 1,
            nextIndex: this.state.nextIndex + 1
        }));
        window.scrollTo(0, 0);
    }


    getTitle(index) {
        if (data[index] !== undefined)
            return data[index].title
    }

    getKey(index) {
        if (data[index] !== undefined)
            return data[index].key
    }



    render(props) {
        return (
            <SongDetailWrapper>
                <div className="lyrics">
                    <h3>{this.state.dataSongs.song.title}</h3>
                    {this.state.dataSongs.song.img &&
                        <img src={this.state.dataSongs.song.img} alt={this.state.dataSongs.song.title} />
                    }
                    <p style={{ whiteSpace: 'pre-line' }}>{this.state.dataSongs.song.lyrics ? this.state.dataSongs.song.lyrics : 'Coming soon'}</p>
                </div>
                {this.state.dataSongs.song.link &&
                    <div className="iframeWrapper">
                        <iframe width="560" height="315" src={this.state.dataSongs.song.link + "?modestbranding=1&showinfo=0&fs=0rel=0"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                }
                <div className="pagination">

                    {this.state.prevIndex >= 0 &&
                        <span className="prev" onClick={this.handlePrevClick}>&#8592; {this.getTitle(this.state.prevIndex)}</span>
                    }

                    {this.state.nextIndex <= 25 &&
                        <span className="next" onClick={this.handleNextClick}>{this.getTitle(this.state.nextIndex)} &#8594;</span>
                    }

                </div>
            </SongDetailWrapper>

        );
    }
};

export default SongDetails;