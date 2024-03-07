const fs = require('fs');
const path = require('path');
const folderPath = './Data';

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    files.forEach(file => {
        const fileExtension = path.extname(file);
        console.log(fileExtension);
        if (fileExtension) {
            const destinationFolder = path.join(folderPath, fileExtension.substring(1));
            const sourceFilePath = path.join(folderPath, file);
            const destinationFilePath = path.join(destinationFolder, file);
            if (!fs.existsSync(destinationFolder)) {
                fs.mkdirSync(destinationFolder);
            }
            fs.renameSync(sourceFilePath, destinationFilePath);

            console.log(`Moved ${file} to ${destinationFolder}`);
        }
    });
});
