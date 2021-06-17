import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../Components/data/data.json';
import {
  DetailsWrapper
} from './DetailStyle';

class Details extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        letterData: data.filter(item => item.key === (localStorage.getItem('keyVal') !== undefined ? localStorage.getItem('keyVal') : 'a'))[0],
        prevIndex : 0,
        nextIndex : 1,
        imagePath : "",
        imageData: "",
        active: "food"
      };

      this.handleClick = this.handleClick.bind(this);
      this.handlePrevClick = this.handlePrevClick.bind(this);
      this.handleNextClick = this.handleNextClick.bind(this);
  }


  componentDidMount() {
    
    this.setState(state => ({
      prevIndex : data.findIndex(obj => obj.key===this.state.letterData.key) - 1,
      nextIndex : data.findIndex(obj => obj.key===this.state.letterData.key) + 1,
    }));

    window.scrollTo(0, 0);
  }

  handleClick = (key) => {
      this.setState(state => ({
        active : key
      }));
      
      if(key === "vehicle") {
        this.setState(state => ({
          imagePath: this.state.letterData.vehicleImg,
          imageData : this.state.letterData.vehicle
        }));
      } else if(key === "food") {
        this.setState(state => ({
          imagePath: this.state.letterData.foodImg,
          imageData : this.state.letterData.food
        }));
      } else if(key === "animal") {
        this.setState(state => ({
          imagePath: this.state.letterData.animalImg,
          imageData : this.state.letterData.animal
        }));
      } else if(key === "disney") {
        this.setState(state => ({
          imagePath: this.state.letterData.disneyImg,
          imageData : this.state.letterData.disney
        }));
      }

      window.scrollTo(0, 0);
      
  }
  handlePrevClick = () => {
    localStorage.setItem('keyVal', this.getKey(this.state.prevIndex));
    this.setState(state => ({
      letterData: data.filter(item => item.key === (localStorage.getItem('keyVal') !== undefined ? localStorage.getItem('keyVal') : 'a'))[0],
      prevIndex : this.state.prevIndex - 1,
      nextIndex: this.state.nextIndex - 1
    }), function() {
      this.handleClick(this.state.active)
    });
    window.scrollTo(0, 0);
  }

  handleNextClick = () => {
    localStorage.setItem('keyVal', this.getKey(this.state.nextIndex));
    this.setState(state => ({
      letterData: data.filter(item => item.key === (localStorage.getItem('keyVal') !== undefined ? localStorage.getItem('keyVal') : 'a'))[0],
      prevIndex : this.state.prevIndex + 1,
      nextIndex: this.state.nextIndex + 1
    }), function() {
      this.handleClick(this.state.active)
    });
    window.scrollTo(0, 0);
  }

  getTitle(index) {
    if(data[index] !== undefined)
      return data[index].title
  }

  getKey(index) {
    if(data[index] !== undefined)
      return data[index].key
  }

  render(props) {
    return (
        <DetailsWrapper>
          <div className="content-wrapper">
            <div className="left-blk">
              <img src={this.state.imagePath ? this.state.imagePath : this.state.letterData.foodImg} alt="Apple" />
              <p className="text"><span>{this.state.letterData.title}</span> for <span>{this.state.imageData ? this.state.imageData : this.state.letterData.food}</span></p>
              <div className="pagination">
                
                {this.state.prevIndex >= 0 &&
                <span className="prev" onClick={this.handlePrevClick}>&#8592; {this.getTitle(this.state.prevIndex)}</span>
                }

                {this.state.nextIndex <= 25 &&
                <span className="next" onClick={this.handleNextClick}>{this.getTitle(this.state.nextIndex)} &#8594;</span>
                }

              </div>
            </div>
            <div className="right-blk">
              <h3>Find More</h3>
              <ul>
                <li className={this.state.active === "food" ? 'active food-ico' : 'food-ico'} onClick={() => this.handleClick('food')}>Fruits &amp; Vegetables</li>
                <li className={this.state.active === "vehicle" ? 'active vehicle-ico' : 'vehicle-ico'} onClick={() => this.handleClick('vehicle')}>Vehicle</li>
                <li className={this.state.active === "animal" ? 'active animal-ico' : 'animal-ico'} onClick={() => this.handleClick('animal')}>Animal</li>
                <li className={this.state.active === "disney" ? 'active disney-ico' : 'disney-ico'} onClick={() => this.handleClick('disney')}>Disney</li>
                <li className="music"><Link to="/song-details">Rhymes <i className="arrow right"></i></Link></li>
              </ul>
            </div>
          </div>
        </DetailsWrapper>
    );
  }
};
  
export default Details;