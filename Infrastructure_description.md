# Infrastructure Description

## Overview

The Udagram application uses the following AWS services:

### Amazon RDS
Used as the PostgreSQL database for storing:

- User accounts
- Feed items
- Application data

### Elastic Beanstalk

Hosts the backend API.

Responsibilities:

- Run Node.js backend server
- Connect to PostgreSQL database
- Expose REST API endpoints

### Amazon S3

Hosts the frontend application.

Responsibilities:

- Store static frontend files
- Provide public website hosting

---

## Infrastructure Flow

User Browser
→ Amazon S3 (Frontend)

Frontend
→ Elastic Beanstalk (Backend API)

Backend API
→ Amazon RDS (PostgreSQL Database)

---

## AWS Services Used

| Service | Purpose |
|----------|----------|
| Amazon S3 | Frontend hosting |
| Elastic Beanstalk | Backend hosting |
| Amazon RDS PostgreSQL | Database storage |