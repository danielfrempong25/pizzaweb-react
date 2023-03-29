import img4 from "./images/pexels-muffin-creatives-1653877.jpg";

function About() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2>About pizza</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={img4} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>Pizza is awesome</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nul
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
