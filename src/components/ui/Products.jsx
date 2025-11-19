import React from 'react';
import { usePlaceholder } from '../../hooks/usePlaceholder';
import { useProducts } from '../../hooks/useProducts';
import toast, { Toaster } from 'react-hot-toast';
import wave from '../../assets/images/waves.svg'

const Product = () => {
  const loaded = usePlaceholder();
  const products = useProducts();
  const notify = () => toast.success('Successfully toasted!')

  return (
    <section>
      <div className="container my-3 placeholder-glow">
        <h3>
          <span className={`mb-3 ${!loaded ? 'placeholder shadow-sm' : ''}`}>Products</span>
        </h3>
        <div className="row">
          {products.slice(0, 6).map((product) => (
            <div className="col-md-6 col-lg-4 mb-5" key={product.id}>
              <div className="card border-0 h-100">
                {!loaded && (
                  <div
                    className="placeholder shadow-sm w-100 mb-3"
                    style={{ height: "400px", borderRadius: "10px" }}
                  />
                )}
                <img
                  src={product.image}
                  alt={product.proName}
                  className={`w-100 ${loaded ? '' : 'd-none'}`}
                  style={{ height: "400px", objectFit: "cover", borderRadius: "10px" }}
                />
                <div className="card-body">
                  <h5 className="card-title border-bottom">
                    {!loaded ? <span className="placeholder shadow-sm w-50"></span> : product.proName}
                  </h5>
                  <h5 className="card-title border-bottom">
                    {!loaded ? <span className="placeholder shadow-sm w-50"></span> : product.price}
                  </h5>
                  <button
                    className="btn btn-warning w-100 mt-3"
                    onClick={() => notify(product)}
                  >
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      {/* <img src={wave} alt="" style={{ width: "100%" }}/> */}
    </section>
  );
};

export default Product;
