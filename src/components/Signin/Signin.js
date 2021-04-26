import React from "react";

const Signin = () => {
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
      <main className="pa4 black-88">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 1h-copy f6" for="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 1h-copy f6" for="password">
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
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value=""
            />
          </div>
          <div className="1h-copy mt3">
            <a href="#0" className="f6 link dim black db">
              Register
            </a>
          </div>
        </form>
      </main>
    </article>
  );
};

export default Signin;
