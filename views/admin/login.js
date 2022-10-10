const layout = require('../layout')

const adminLoginPage = () => {
  return layout({
    template: `
      <div id="login-container" class="ui container">
        <h1>Sign In</h1>
        <div id="form-container">
          <form class="ui form" method="POST" action="/admin/login">
            <div class="field">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter email...">
            </div>
            <div class="field">
              <label>Password</label>
              <input type="password" name="password" placeholder="Enter password...">
            </div>
            <button class="ui button" type="submit">Sign In</button>
          </form>
        </div>
      </div>
    `
  })
}

module.exports = adminLoginPage