const layout = require('./layout')

const indexPage = ({ data }) => {
  return layout({ template: `
    <div class="ui container">
      <h1>Help us decide</h1>
    </div>
  ` })
}

module.exports = indexPage