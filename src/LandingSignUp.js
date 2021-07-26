/* This acts as a whole site container. In this case, a landing sign-up page.

We send the value of the form's submit button through props in case we want to re-use it somewhere else, since it is a general sign-up form.
e.g., it could say "Sign up", "Register", etc.

We could define the SignUpLegend and TryIt as components too, but since it doesn't have any reusability, it is a bit overkill. */

import './LandingSignUp.scss';

import Form from './components/form/Form';

function LandingSignUp() {
  return (
    <main className = "LandingSignUp">
      <div className = "SignUpLegend">
        <h1>
          Learn to code by <br className = "br-small br-xlarge"/>watching others
        </h1>
        <h2>
          See how experienced developers solve problems in <span className="nowrap">real-time.</span> Watching scripted tutorials is great, but understanding how developers think is invaluable.
        </h2>
      </div>
      <div className = "FormContainer">
        <div className = "TryIt">
          <span className = "fontbold">Try it free 7 days</span> then <br className = "br-small"/>$20/mo. thereafter
        </div>
        <Form SubmitText = {"Claim your free trial".toUpperCase()}></Form>
      </div>
    </main>
  );
}

export default LandingSignUp;
