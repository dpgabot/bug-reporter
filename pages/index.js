export default function ReportBug() {
  return (
    <div>
      <form class="form-horizontal">
        <fieldset>
          <legend>Bug Report form</legend>

          <div class="form-group">
            <label class="col-md-4 control-label" for="textinput">
              What were you trying to do?
            </label>
            <div class="col-md-5">
              <input
                id="textinput"
                name="textinput"
                type="text"
                placeholder=""
                class="form-control input-md"
                required=""
              ></input>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="textarea">
              What were the results you were expecting?
            </label>
            <div class="col-md-4">
              <textarea
                class="form-control"
                id="textarea"
                name="textarea"
              ></textarea>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="result">
              What was the actual result?
            </label>
            <div class="col-md-4">
              <textarea
                class="form-control"
                id="result"
                name="result"
              ></textarea>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="environment">
              Details of the environment (which browser, OS, etc.){" "}
            </label>
            <div class="col-md-4">
              <div class="checkbox">
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
              <div class="checkbox">
                <label for="environment-1">
                  <input
                    type="checkbox"
                    name="environment"
                    id="environment-1"
                    value="Microsoft Edge"
                  ></input></label>
                  Microsoft Edge
              </div>
              <div class="checkbox">
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
              <div class="checkbox">
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
              <div class="checkbox">
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
              <div class="checkbox">
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
              <div class="checkbox">
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

          <div class="form-group">
            <label class="col-md-4 control-label" for="reproductionSteps">
              Could you tell us the steps we can take to recreate the problem?{" "}
            </label>
            <div class="col-md-4">
              <textarea
                class="form-control"
                id="reproductionSteps"
                name="reproductionSteps"
              ></textarea>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="email">
              Contact details (in case you want to be reached after the bug is
              resolved)
            </label>
            <div class="col-md-5">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="email@me.com"
                class="form-control input-md"
              ></input>
            </div>
          </div>
          <input type="submit" value="Submit"></input>
        </fieldset>
        
      </form>
    </div>
  );
}
