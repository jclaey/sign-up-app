const layout = ({ template }) => {
  return `
    <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
          <link rel="stylesheet" href="/css/style.css">
          <title>Some Business</title>
        </head>
        <body>
          ${template}
        </body>
      </html>
  `
}

module.exports = layout