# Pipeline Description

## Overview

The deployment pipeline is handled by CircleCI.

Every push to the main branch automatically triggers the pipeline.

---

## Build Stage

The build stage performs:

1. Install frontend dependencies
2. Install backend dependencies
3. Lint frontend code
4. Build frontend application
5. Build backend application

---

## Deploy Stage

After a successful build:

1. Frontend files are deployed to Amazon S3
2. Backend application is deployed to Elastic Beanstalk

---

## Environment Variables

CircleCI stores application secrets as environment variables:

- POSTGRES_HOST
- POSTGRES_DB
- POSTGRES_USERNAME
- POSTGRES_PASSWORD
- POSTGRES_PORT
- AWS_BUCKET
- AWS_REGION
- JWT_SECRET
- URL

These values are injected at runtime and are not stored in source code.