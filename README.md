
# College Management System

The College Management System is a MERN Stack-based system with three different login portals for students, faculty, and admin.

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

**Database:** MongoDB

## Student Features

- Internal Marks: Access to view internal marks for courses
- External Marks: Access to view external marks for courses
- Course Materials: Ability to download course materials
- Notices: Access to view notices
- Timetables: Access to view their own timetables
- Password Update: Ability for students to update their passwords

## Faculty Features

- Student Details: Ability for faculty to view student details
- Password Update: Ability for faculty to update their own passwords
- Notices: Ability for faculty to add notices
- Materials Upload: Ability for faculty to upload course materials
- Timetable Management: Ability for faculty to manage timetables
- Exam Mark Recording: Ability for faculty to record internal and external exam marks

## Admin Features

- Account Creation: Ability for admins to add new students, faculty, and admin accounts
- Account Details Modification: Ability for admins to modify the details of each account
- Subject Management: Ability for admins to add/edit subjects
- Notices Management: Ability for admins to add/edit notices

## Setup

Add one admin using postman and then you can login into admin panel and add student and faculty from admin section.

1) Add Admin Credentials

![image](https://github.com/krish-7104/College-Management-System/assets/95702005/c9560aff-0997-4ccc-96a1-7abe863d386f)
 
2) Add Admin Details

![image](https://github.com/krish-7104/College-Management-System/assets/95702005/1d7d25af-19ea-447d-b4b8-b7f8f341db98)

The data flow in our project follows a structured process from the client request through to the database operations and back to the client's response. Let me walk you through the main components and steps involved:

    Client Request:
        Users interact with our system via HTTP requests. These requests can come from web browsers, mobile applications, or any client capable of making HTTP requests.

    API Endpoints:
        We have organized our APIs into various endpoints based on the functionality they provide:
            Authentication APIs:
                /api/student/auth/login
                /api/student/auth/register
                /api/student/auth/update/:id
                /api/student/auth/delete/:id
                /api/faculty/auth/login
                /api/faculty/auth/register
                /api/faculty/auth/update/:id
                /api/faculty/auth/delete/:id
                /api/admin/auth/login
                /api/admin/auth/register
                /api/admin/auth/update/:id
                /api/admin/auth/delete/:id
            Details APIs:
                Student Details:
                    /api/student/details/getDetails
                    /api/student/details/addDetails
                    /api/student/details/updateDetails/:id
                    /api/student/details/deleteDetails/:id
                Faculty Details:
                    /api/faculty/details/getDetails
                    /api/faculty/details/addDetails
                    /api/faculty/details/updateDetails/:id
                    /api/faculty/details/deleteDetails/:id
                    /api/faculty/details/count
                Admin Details:
                    /api/admin/details/getDetails
                    /api/admin/details/addDetails
                    /api/admin/details/updateDetails/:id
                    /api/admin/details/deleteDetails/:id
            Other APIs:
                /api/timetable/getTimetable
                /api/timetable/addTimetable
                /api/timetable/deleteTimetable/:id
                /api/material/getMaterial
                /api/material/addMaterial
                /api/material/updateMaterial/:id
                /api/material/deleteMaterial/:id
                /api/notice/getNotice
                /api/notice/addNotice
                /api/notice/updateNotice/:id
                /api/notice/deleteNotice/:id
                /api/subject/getSubject
                /api/subject/addSubject
                /api/subject/deleteSubject/:id
                /api/marks/getMarks
                /api/marks/addMarks
                /api/marks/deleteMarks/:id
                /api/branch/getBranch
                /api/branch/addBranch
                /api/branch/deleteBranch/:id

    Middleware:
        Multer Middleware:
            Multer is used for handling file uploads. It stores uploaded files in the ./media directory and assigns them specific filenames based on the type of data being uploaded (e.g., timetable, profile, material).

    Data Validation and Processing:
        Before any database operation, we ensure data validation and processing are handled appropriately:
            Authentication checks for valid credentials.
            Data is validated and processed before being stored or updated in the database.

    Database Operations:
        MongoDB:
            We use MongoDB as our database system.
            Each API endpoint interacts with the MongoDB database using Mongoose to perform operations such as find, create, update, and delete.

    Server Response:
        Once the database operation is complete, the server responds back to the client with an appropriate HTTP status code and response data.