# allow-options

An express middleware for acknowledges OPTIONS method

## Installation
    npm install allow-options
    
## Usage


    let express = require('express');  
    let allowOptions = require('allow-options');  
    app.use('/<routes>', [allowOptions, <other middlewares> ], (req, res, next)=>{
        // body here
    });


## License
[MIT](https://github.com/sridharrajs/allow-options/blob/master/LICENSE)