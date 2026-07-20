# Architecture Diagram

```mermaid
flowchart LR
    U[User Browser] --> S3[Amazon S3 Static Website\nFrontend Hosting]
    S3 --> EB[AWS Elastic Beanstalk\nNode/Express API]
    EB --> RDS[Amazon RDS PostgreSQL\nApplication Database]
    EB --> IAM[AWS IAM Role/Policy\nService Permissions]

    subgraph CI[CI/CD]
      GH[GitHub Repository] --> CC[CircleCI]
      CC --> S3
      CC --> EB
    end
```

## Notes

- Frontend is hosted as static assets in S3 website hosting.
- Backend API is deployed to Elastic Beanstalk.
- API persists data in RDS PostgreSQL.
- CircleCI builds and deploys both frontend and backend from GitHub commits.
