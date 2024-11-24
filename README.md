# Job Portal Backend

The **Job Portal Backend** is a RESTful API that powers the Job Portal application. It handles authentication, user management, job postings, and applications. Built with modern backend technologies, it ensures secure and efficient data management for both job seekers and employers.


## Tech Stack

- **Programming Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose ORM)
- **Authentication**: JSON Web Tokens (JWT)
- **Environment Variables**: dotenv
- **Deployment**: Vercel


## Features

1. **Authentication & Authorization**:
   - User registration and login.
   - Role-based access control (job seeker, employer, admin).
   - Secure password hashing with bcrypt.

2. **User Management**:
   - Create, read, update, and delete user profiles.
   - Separate dashboards for job seekers and employers.

3. **Job Listings**:
   - CRUD operations for job postings (create, read, update, delete).
   - Search jobs by title, location, or category.
   - Filter jobs by criteria like salary or experience.

4. **Applications**:
   - Job seekers can apply to jobs.
   - Employers can view and manage job applications.

5. **Admin Functionality**:
   - Manage all users and job postings.
   - Monitor application activity.

6. **Error Handling & Validation**:
   - Centralized error handling with proper HTTP status codes.
   - Input validation for API requests.



