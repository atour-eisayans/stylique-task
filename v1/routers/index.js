const fs = require('fs');
const { Router } = require('express');

const router = Router();

const routesSuffix = '.routes.js';
const sanitizeRouteName = (routeName) => routeName
    .slice(0, -1 * routesSuffix.length);

const routesFilename = fs.readdirSync(__dirname);
for (const routeFilename of routesFilename) {
    if (routeFilename.endsWith(routesSuffix)) {
        const routeName = sanitizeRouteName(routeFilename);
        const routesToImport = require(`./${routeFilename}`);
        router.use(`/${routeName}`, routesToImport);
    }
}

module.exports = router;
