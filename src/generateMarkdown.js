function generateMarkdown() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>My Team</title>
    </head>
    <body>
        <header class="d-flex justify-content-center text-light p-5 mb-5 align-middle bg-info">
            <h1>My Team</h1>
        </header>
        <div id="my-team" class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-md-center ">
    `
};


module.exports = generateMarkdown;