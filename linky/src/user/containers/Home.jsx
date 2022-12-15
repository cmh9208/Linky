import { Route, Routes } from "react-router-dom"
import {Navigation} from 'user'


const Home = () => {
    return (
    <>
    <div class="login-page" ng-app="">
    <Navigation/>
    <div class="login-content login-content-signin" ng-hide="showSignIn">
    <div>
        <h2>Log in</h2>
        <form class="wrapper-box" role="form" ng-submit="login()">
            <input type="email"
            ng-model="email"
            class="form-control form-control-email"
            placeholder="Email address"
            required/>
            <input type="password"
            ng-model="password"
            class="form-control form-control-password"
            placeholder="Password"
            required />
            <div class="checkbox pull-left">
            <label>
            <input type="checkbox"/> Remember me.
            </label>
        </div>
        <a class="outer-link pull-left" href="#/forgot">Forgot Password</a>
        <button type="submit" class="btn btn-submit btn-default pull-right">Log in</button>
        </form>
    </div>
    </div>

    <div class="login-content login-content-signup ng-hide" ng-show="showSignIn">
    <div>
      <h2>Sign Up</h2>
      <form class="wrapper-box" role="form" ng-submit="register()">
        <input type="text"
          ng-model="username"
          class="form-control form-control-username"
          placeholder="Username"
          required/>
        <input type="email"
          ng-model="email"
          class="form-control form-control-email"
          placeholder="Email address"
          required />
        <input type="password"
          ng-model="password"
          class="form-control form-control-password"
          placeholder="Password"
          required />
        <div class="checkbox pull-left">
          <label>
            <input type="checkbox"/> Remember me.
          </label>
        </div> 
        <button type="submit" class="btn btn-submit btn-default pull-right">Sign up</button>
      </form>
    </div>
  </div>



    <div class="login-switcher">
    <div class="login-switcher-signin" ng-show="showSignIn">
        <h3>Have an account?</h3>
        <button ng-click="showSignIn=false">Login</button>
    </div>
    <div class="login-switcher-signup" ng-hide="showSignIn">
        <h3>Don't have an account?</h3>
        <button ng-click="showSignIn=true">Sign Up</button>
    </div>
    </div>


    </div>
    </>
    )
}
export default Home