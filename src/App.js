import ProductCard from "./component/ProductCard";
import fake_date from "./assets/fake_data";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="container">
      <div className="row ">
        {fake_date.map((item, index) => {
          return <ProductCard item={item} key={index} setData={setData} />;
        })}
        <div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="card">
                    <img src={data.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      <div className="d-flex">
                        <p className="card-text">
                          <span>giá: </span>
                          {data.price}
                        </p>
                        <p className="card-text ml-5">
                          <span>Số lượng: </span>
                          {data.quantity}
                        </p>
                      </div>
                      <p className="card-text">{data.description}</p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
