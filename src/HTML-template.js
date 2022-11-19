
createHTML = (data) => {
    // console.log("This is " + data);
    htmlArray = []; 

    for (let i = 0; i < data.length; i++) {
        const eachEmployee = data[i];
        const employeeRole = eachEmployee.getRole(); 

        if (employeeRole === 'Manager') {
            const managerCard = createManager(eachEmployee);
            htmlArray.push(managerCard);
        }
        if (employeeRole === 'Engineer') {
            const engineerCard = createEngineer(eachEmployee);
            htmlArray.push(engineerCard);
        }
        if (employeeRole === 'Intern') {
            const internCard = createIntern(eachEmployee);
            htmlArray.push(internCard);
        }
    };

    const cards = htmlArray.join('');
    const generateallCards = pageTemplate(cards); 
    return generateallCards;
};


const pageTemplate = function(cards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>
        <header class="container">
            <div class="jumbotron text-center">
                <nav class="container">
                    <h1>Team Profile</h1>
                </nav>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    ${cards}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" crossorigin="anonymous"></script>
    </html>
  `
};

const createManager = function(manager) {
    return `
    <div class="col-4">
        <div class="card mx-auto mb-3">
        <h4 class="card-header">${manager.name}<br/><br/>Manager</h4>
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email Address: ${manager.email}</li>
            <li class="list-group-item">Phone Number: ${manager.officenumber}</li>
        </ul>
    </div>
</div>`
};

const createEngineer = function(engineer) {
    return `
    <div class="col-4">
        <div class="card mx-auto mb-3">
        <h4 class="card-header">${engineer.name}<br/><br/>Engineer</h4>
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email Address: ${engineer.email}</li>
            <li class="list-group-item">GitHub: https://github.com/${engineer.github}</li>
        </ul>
    </div>
</div> `
};

const createIntern = function(intern) {
    return `
    <div class="col-4">
        <div class="card mx-auto mb-3">
        <h4 class="card-header">${intern.name}<br/><br/>Intern</h4>
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email Address: ${intern.email}</li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
</div>`
};



module.exports = createHTML;