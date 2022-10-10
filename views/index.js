const layout = require('./layout')

const indexPage = () => {
  return layout({ template: `
    <div id="index-container" class="ui container">
      <h1>Join Today</h1>
      <form class="ui form" method="POST" action="/">
        <div class="field">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter email...">
        </div>
        <button class="ui button" type="submit">Submit</button>
      </form>
    </div>
  ` })
}

module.exports = indexPage