const layout = require('./layout')

const successPage = () => {
  return layout({ template: `
      <div id="success-container" class="ui container">
        <div class="ui positive message transition">
          <i class="close icon"></i>
          <div class="header">
            Success!
          </div>
          <p>Thank you for signing up.</p>
          <a class="ui button" href="/">Go home</a>
        </div>
      </div>
    ` })
}

module.exports = successPage