const fs = require('fs');
const path = require('path');
const multer = require('multer');

const { uploads: uploadsConfig } = require('../configs/config');

if (!fs.existsSync(uploadsConfig.destination)) {
    fs.mkdirSync(uploadsConfig.destination);
}

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsConfig.destination);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const time = Date.now();
        cb(null, `${time}-${Math.floor(Math.random() * 100000)}${ext}`);
    }
})
const upload = multer({
    storage: multerStorage,
    limits: {
        fileSize: uploadsConfig.imagesMaxSize,
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (uploadsConfig.allowedImageFormats.indexOf(ext) < 0) {
            return cb(new Error('Invalid image type!'));
        }
        cb(null, true);
    },
});

module.exports = upload;
