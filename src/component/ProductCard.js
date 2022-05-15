import React from "react";

const ProductCard = (props) => {
  let { item, index, setData } = props;
  return (
    <div className="col-4 ">
      <div className="card ml-5 mt-5">
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.price}</p>
          <a
            href="#"
            onClick={() => setData(item)}
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
