import React from "react";

const Category = ({ category }) => {
  const { img, name } = category;
  return (
    <div >
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
    </div>
  );
};

export default Category;
