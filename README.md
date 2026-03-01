# Bookmark API

NestJS API for managing bookmarks. Uses MongoDB, Typebox for validation, and Swagger for docs.

## Setup

```bash
npm install
```

Copy or create a `.env` file and set your values (e.g. `MONGODB_URI`, `PORT`). If not set, the app uses `mongodb://localhost:27017/bookmark-api` and port `3000`.

## Run

```bash
npm run start:dev
```

- API: http://localhost:3000  
- Swagger: http://localhost:3000/api  

## Endpoints

| Method | Path              | Description        |
|--------|-------------------|--------------------|
| POST   | /bookmarks        | Create bookmark    |
| GET    | /bookmarks        | List all bookmarks |
| GET    | /bookmarks/:id    | Get one bookmark   |
| PATCH  | /bookmarks/:id    | Update bookmark    |
| DELETE | /bookmarks/:id    | Delete bookmark    |
