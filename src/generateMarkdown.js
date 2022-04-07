function generateMarkdown(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
    </head>
    <body>
        <header class="d-flex justify-content-center text-light p-5 mb-5 align-middle bg-info">
            <h1>My Team</h1>
        </header>
        <div id="my-team" class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-md-center ">
            <div class="col">
                <div class="card text-dark bg-light m-3 border-info">
                    <div class="card-body">
                        <div class="card-header">
                            <h2>Manager Name</h2>
                            <h3>Manager</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: 7</li>
                            <li class="list-group-item">Email: email@gmail.com</li>
                            <li class="list-group-item">Office Number: 355</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
    `
};

module.exports = generateMarkdown;