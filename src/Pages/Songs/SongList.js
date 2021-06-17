import React from 'react';
  
import { Link } from 'react-router-dom';

const SongList = (props) => {
  return (
      <div>
        <Link to = {{
            pathname: "/details",
            letterProps: {
                name: props.location.letterProps.name
            }
        }}>Back</Link>
        <p>
          <Link to = {{
              pathname: "/song-details",
              letterProps: {
                  name: props.location.letterProps.name
              }
          }}>A Sailor Went To Sea</Link>
        </p>
      </div>
  );
};
  
export default SongList;