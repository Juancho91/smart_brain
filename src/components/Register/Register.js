import React from "react";

const Register = ({ onRouteChange }) => {
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
      <main className="pa4 black-88">
        <div className="measure white">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 white">Register</legend>
            <div className="mt3">
              <label className="db fw6 1h-copy f6" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 1h-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 1h-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={() => onRouteChange("home")}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib white"
              type="submit"
              value="Register"
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
