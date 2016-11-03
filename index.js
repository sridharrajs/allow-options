/**
 * Created by sridharrajs.
 */

'use strict';

function allowOptions(req, res, next) {
    if (req.method === 'OPTIONS') {
        return res.status(200);
    }
    next();
}

module.exports = allowOptions;