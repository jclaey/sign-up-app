const layout = require('../layout')

const adminDashboardPage = ({ result }) => {
  const renderedUsers = () => {
    return result.map(user => {
      return `
        <div class="ui card">
          <div class="content">
            <div class="header">${user.email}</div>
          </div>
          <div class="content">
            <p>${user.created_at}</p>
          </div>
        </div>
      `
    }).join('')
  }

  return layout({
    template: `
      <div class="ui container">
        <h1>Admin Area</h1>
        <div>
          ${renderedUsers()}
        </div>
      </div>
    `
  })
}

module.exports = adminDashboardPage