import React from 'react'
import Movie from '../components/Movie';
import { dummy } from "../movieDummy";
import { useNavigate } from 'react-router-dom';

export default function Movies(props) {

 
  return (
    <div>
      <div className="movies-container" >
        {dummy.results.map((item) => {
          return (
            <Movie              
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  )
}