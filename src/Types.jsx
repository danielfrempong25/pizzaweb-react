import img5 from "./images/alan-hardman-SU1LFoeEUkk-unsplash.jpg";
import img6 from "./images/pexels-narda-yescas-1566837.jpg";
import img7 from "./images/pexels-horizon-content-3762069.jpg";
import img8 from "./images/pexels-engin-akyurt-1527602.jpg";

function Types() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h3>Pizza Types</h3>
      </div>
      <div className="row">
        <div className="col-md-3">
          <img
            src={img5}
            alt="Pepperoni"
            className="Pepperoni Pizza img-fluid"
          />
          <div className="card-body">
            <h2 className="card-tittle">Pepperoni Pizza</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <img
            src={img6}
            alt="Danny's bougie special"
            className="Danny's bougie special img-fluid"
          />
          <div className="card-body">
            <h2 className="card-tittle">Danny's bougie special</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <img src={img7} alt="Chesse" className="Chesse img-fluid" />
          <div className="card-body">
            <h2 className="card-tittle">Chesse</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <img src={img8} alt="Vegan" className="Vegan img-fluid" />
          <div className="card-body">
            <h2 className="card-tittle">Vegan</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Types;
