# TBC Web — Static Next.js Banking Dashboard

This project is a static Next.js banking dashboard built for learning and practicing Next.js App Router architecture.

## Features

- Next.js App Router
- Static mock data
- Login/logout flow
- httpOnly cookie authentication
- Protected dashboard routes
- Middleware route protection
- Mock accounts, transactions, pension, and cashflow data
- Responsive dashboard UI

## Authentication Flow

1. User logs in from the login page.
2. `/api/login` checks the static mock user data.
3. If credentials are valid, the server sets an httpOnly `userId` cookie.
4. `middleware.ts` protects all `/dashboard` routes.
5. `/api/dashboard` reads the user from the cookie, not from the client body.
6. Logout clears the cookie.

## Security Notes

- Client-side `userId` is not trusted.
- Dashboard data is returned based on the httpOnly cookie.
- Passwords are not returned from API responses.
- `/api/check` was removed to avoid exposing mock data.

## Demo Credentials

```txt
Username: goga
Password: 1234