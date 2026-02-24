# Day 1 - Setup:

Install:
    - Node.js (LTS)
    - git
    - MongoDB Atlas
    - REST Client (or Postman)

File Structure:
    - app-root/
        - server/
        - client/

Win Condition:
    - Run `node -v`, `npm -v`, `git --version`

_

# Day 2 - Backend Skeleton

* Starting here because frontend without API gets boring fast.

In server/:
    - `npm init -y`
    - Install express, cors, dotenv, nodemon

Create:
    - src/index.js
    - basic route: ``GET /health -> { ok: true }``

Win Condition:
    - Server runs with `npm run dev`
    - You hit http://localhost:5000/health and see JSON