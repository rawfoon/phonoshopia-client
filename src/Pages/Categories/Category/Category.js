import React from "react";
import {Link} from 'react-router-dom'

const Category = ({ category }) => {
  
  const {id, img, name } = category;
  return (
    <Link to={`/category/${name}`}>
      <div className="card  bg-base-100 shadow-xl hover:bg-slate-500 ">
        <figure className="px-10 pt-10">
          <img src={img} alt="" className="rounded-xl w-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>

          {/* <div className="card-actions">
      <button className="btn btn-primary">See All</button>
    </div> */}
        </div>
      </div>
    </Link>
  );
};

export default Category;
