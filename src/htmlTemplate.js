// HTML file template to be used with the node application. 
const htmlTemplate = (team) => {
    
    let tempString = 
        `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="../src/style.css">    
    <title>Team Profile</title>
</head>
<body>
    <!-- header -->
    <header class='container'>
        <div class='row justify-content-center'>
            <h1>My Team</h1>
        </div>
    </header>
    
    <!-- main container for team member cards -->
    <main class='container'>
        <section class='row'>
            ${team}
        </section>
    </main>

    <footer>
        <h2>Made by Noe Navarro 2022</h2>
    </footer>
</body>
</html>
        `
    return tempString;
}

module.exports = htmlTemplate;
