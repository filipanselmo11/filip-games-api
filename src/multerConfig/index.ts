import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, path.resolve('uploads'));
    },

    filename: (request, file, callback) => {
        const time =  new Date().getTime();

        callback(null, `${time}_${file.originalname}`);
    },
});

export { storage };