const fs = require('fs');
const path = require('path');
const { uploads: uploadsConfig } = require('../configs/config');

module.exports = (fileNames) => {
    console.log(fileNames);
    if (Array.isArray(fileNames)) {
        for (const fileName of fileNames) {
            const filePath = path.join(uploadsConfig.destination, fileName);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }
    } else {
        const filePath = path.join(uploadsConfig.destination, fileNames);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
};
