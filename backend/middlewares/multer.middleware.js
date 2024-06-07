const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./media");
    },
    filename: function (req, file, cb) {
        let filename = ""
        if (req.body?.type === "timetable") {
            filename = `Timetable_${req.body.semester}_Semester_${req.body.branch}.png`
        } else if (req.body?.type === "profile") {
            if (req.body.enrollmentNo) {
                filename = `Student_Profile_${req.body.enrollmentNo}_Semester_${req.body.branch}.png`
            } else {
                filename = `Faculty_Profile_${req.body.employeeId}.png`
            }
        } else if (req.body?.type === "material") {
            filename = `${req.body.title}_Subject_${req.body.subject}.pdf`
        }
        cb(null, `${filename}`);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;


// const multer = require("multer");
// const path = require("path");

// // File type validation function
// const fileFilter = (req, file, cb) => {
//     // Allowed file types
//     if (file.fieldname === "profile" && !file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//         return cb(new Error("Only images are allowed for profile pictures!"), false);
//     }
//     if (file.fieldname === "timetable" && !file.originalname.match(/\.(png)$/)) {
//         return cb(new Error("Only PNG images are allowed for timetable!"), false);
//     }
//     if (file.fieldname === "material" && !file.originalname.match(/\.(pdf)$/)) {
//         return cb(new Error("Only PDF files are allowed for study materials!"), false);
//     }
//     cb(null, true);
// };

// // Multer configuration
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "./media");
//     },
//     filename: function (req, file, cb) {
//         let filename = "";
//         if (req.body?.type === "timetable") {
//             filename = `Timetable_${req.body.semester}_Semester_${req.body.branch}.png`;
//         } else if (req.body?.type === "profile") {
//             if (req.body.enrollmentNo) {
//                 filename = `Student_Profile_${req.body.enrollmentNo}_Semester_${req.body.branch}.png`;
//             } else {
//                 filename = `Faculty_Profile_${req.body.employeeId}.png`;
//             }
//         } else if (req.body?.type === "material") {
//             filename = `${req.body.title}_Subject_${req.body.subject}.pdf`;
//         }
//         cb(null, `${filename}`);
//     }
// });

// // Multer upload middleware with fileFilter and limits
// const upload = multer({ 
//     storage: storage,
//     fileFilter: fileFilter,
//     limits: {
//         fileSize: 1024 * 1024 * 10 // 10 MB file size limit
//     }
// });

// module.exports = upload;
