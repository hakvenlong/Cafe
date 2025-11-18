import React, { useState, useEffect } from 'react';

const proImage = 'https://image.similarpng.com/file/similarpng/original-picture/2020/08/Paper-coffee-bag-on-transparent-background-PNG.png';

const products = [
  { id: 1, image: proImage, proName: 'Latte', price: '$5', tastingNotes: ['Hazelnut','Vanilla','Caramel'], origin: 'Ethiopia', Region: 'Southern' },
  { id: 2, image: proImage, proName: 'Cappuccino', price: '$6', tastingNotes: ['Chocolate','Nutty','Citrus'], origin: 'Colombia', Region: 'Western' },
  { id: 3, image: proImage, proName: 'Espresso', price: '$4', tastingNotes: ['Bitter','Smoky','Sweet'], origin: 'Brazil', Region: 'Northern' },
  { id: 4, image: proImage, proName: 'Espresso', price: '$4', tastingNotes: ['Bitter','Smoky','Sweet'], origin: 'Brazil', Region: 'Northern' },
  { id: 5, image: proImage, proName: 'Espresso', price: '$4', tastingNotes: ['Bitter','Smoky','Sweet'], origin: 'Brazil', Region: 'Northern' },
  { id: 6, image: proImage, proName: 'Espresso', price: '$4', tastingNotes: ['Bitter','Smoky','Sweet'], origin: 'Brazil', Region: 'Northern' },
];

const Product = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const buy = () => alert('Product added to cart!');

  return (
    <section>
      <div className="container my-3 placeholder-glow">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-5" key={product.id}>
              <div className="card border-0 h-100">
                {!loaded && (
                  <div
                    className="placeholder shadow-sm w-100 mb-3"
                    style={{ height: "400px", borderRadius: "10px" }}
                  ></div>
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
                    {!loaded ? <span className="placeholder shadow-sm w-25"></span> : `Price: ${product.price}`}
                  </h5>
                  <p className="card-text border-bottom">
                    {!loaded ? <span className="placeholder shadow-sm w-75"></span> : `Tasting Notes: ${product.tastingNotes.join(', ')}`}
                  </p>
                  <p className="card-text border-bottom">
                    {!loaded ? <span className="placeholder shadow-sm w-50"></span> : `Origin: ${product.origin}`}
                  </p>
                  <p className="card-text border-bottom">
                    {!loaded ? <span className="placeholder shadow-sm w-50"></span> : `Region: ${product.Region}`}
                  </p>
                  <button className={`btn btn-warning w-100 ${!loaded ? 'placeholder shadow-sm' : ''}`} onClick={buy}>
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href="#" className="text-decoration-none text-black d-flex justify-content-center m-auto">
            <span className={!loaded ? 'placeholder shadow-sm' : ''}>
                View Product
            </span>
        </a>
      </div>
    </section>
  );
};

export default Product;
