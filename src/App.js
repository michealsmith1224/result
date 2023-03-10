import "./App.css";
import { ButtonList } from "./component/buttonslist/buttonlist";
import 'animate.css';


function App() {
  return (
    <div className="App">
      <div className="container p-5 w-100">
        <div className="result-container ">
          <div className="row ">
            <div className="col--6 first-row rounded-5 text-center d-flex align-items-center justify-content-center flex-column padding-5">
              <h4 className="py-4 gray-color small fs-5">Your Result</h4>
              <div className="rounded-circle text-center  a-animation animate__pulse  ">
                <div className="total">76</div>
                <div className="gray-color">of 100</div>
                {
                name.map()
}
              </div>
              

              <h3 className="text-capitalize pt-4 text-white great ">great</h3>

              <p className="pb-4 gray-color small ">
                You scored higher than 50% of the people who have taken the test
              </p>
            </div>
            <div className="col-md-6 border-end-4 px-4 pb-3 ">
              <h4 className="text-capitalize mt-4  small fs-5 dark-blue pb-3">summary</h4>

              <ButtonList />

              <div className="btn p-0  continue-button border mt-4 w-100 rounded-pill">
                <button className=" btn  btn-lg text-white ">continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
