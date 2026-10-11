# NestJS API + Postgres on Naijacloud

The finished code from the guide **[Deploy a NestJS API with a database](https://naijacloud.com/guides/nestjs-api-postgres)**: a small tasks API on NestJS 11 and Prisma 7, with Swagger docs at `/docs`.

Deploy it as a web service with:

- **Build command:** `npm ci && npm run build`
- **Start command:** `npx prisma migrate deploy && npm run start:prod`
- **Variable:** `DATABASE_URL`, the database's Internal URL

The guide explains every step.
