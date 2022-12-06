module.exports = (fieldName = 'fileNames') => (req, res, next) => {
    const fileNames = [];
    if (req.file) {
        fileNames.push(req.file.filename);
    } else if (req.files) {
        for (const fileInfo of req.files) {
            fileNames.push(fileInfo.filename);
        }
    }

    req.body[fieldName] = fileNames;
    next();
}
