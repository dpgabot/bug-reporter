export default function ReportBug() {
  return (
    <div>
      <form action="/api/openIssue" method="POST" >
        <fieldset>
          <h1><legend>Bug Report form</legend></h1>

          <div >
            <label for="textinput">
              What were you trying to do?
            </label>
            <div >
              <textarea
                id="tryingToDo"
                name="tryingToDo"
                type="text"
                placeholder=""
               
                required=""
              ></textarea>
            </div>
          </div>

          <div>
            <label for="textarea">
              What were the results you were expecting?
            </label>
            <div>
              <textarea
                id="expectedBehaviour"
                name="expectedBehaviour"
              ></textarea>
            </div>
          </div>

          <div>
            <label for="result">
              What was the actual result?
            </label>
            <div>
              <textarea
                id="actualResult"
                name="actualResult"
              ></textarea>
            </div>
          </div>

          <div>
            <label for="environment">
              Details of the environment (which browser, OS, etc.){" "}
            </label>
            <div >
              <div >
                <label for="environment-0">
                  <input
                    type="checkbox"
                    name="environment"
                    id="environment-0"
                    value="Google Chrme"
                  ></input>
                  Google Chrme
                </label>
              </div>
              <div >
                <label for="environment-1">
                  <input
                    type="checkbox"
                    name="environment"
                    id="environment-1"
                    value="Microsoft Edge"
                  ></input></label>
                  Microsoft Edge
              </div>
              <div >
                <label for="environment-2">
                  <input
                    type="checkbox"
                    name="environment"
                    id="environment-2"
                    value="Mozilla Firefox"
                  ></input>
                  Mozilla Firefox
                </label>
              </div>
              <div >
                <label for="environment-3">
                  <input
                    type="checkbox"
                    name="environment"
                    id="environment-3"
                    value="Safari"
                  ></input>
                  Safari
                </label>
              </div>
              <div >
                <label for="environment-4">
                  <input
                    type="checkbox"
                    name="environment"
                    id="environment-4"
                    value="Windows"
                  ></input>
                  Windows
                </label>
              </div>
              <div >
                <label for="environment-5">
                  <input
                    type="checkbox"
                    name="environment"
                    id="environment-5"
                    value="Mac"
                  ></input>
                  Mac
                </label>
              </div>
              <div >
                <label for="environment-6">
                  <input
                    type="checkbox"
                    name="environment"
                    id="environment-6"
                    value="Linux"
                  ></input>
                  Linux
                </label>
              </div>
            </div>
          </div>

          <div>
            <label for="reproductionSteps">
              Could you tell us the steps we can take to recreate the problem?{" "}
            </label>
            <div >
              <textarea
                id="reproductionSteps"
                name="reproductionSteps"
              ></textarea>
            </div>
          </div>

          <div >
            <label for="email">
              Contact details (in case you want to be reached after the bug is
              resolved)
            </label>
            <div >
              <input
                id="email"
                name="email"
                type="text"
                placeholder="email@me.com"
              ></input>
            </div>
          </div>
          <input type="submit" value="Submit"></input>
        </fieldset>
        
      </form>
    </div>
  );
}
