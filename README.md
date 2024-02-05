# Digital Finance Dashboard

## Introduction

This project is a full-stack application through which the user gains access to a financial wallet and can track stock prices, buy and sell them.

## Technologies Used

-   Typescript
-   Next (app router)
-   State managers: (React hook forms, TanStack Query soon\* Zustand)
-   Tailwind CSS
-   Work with charts: Recharts
-   Work with time: Moment

### Backend

-   Nest JS
-   PostgreSQL
-   Prisma

### Important source

-   Layout was taken from [Dribbble](https://dribbble.com/shots/19952292-Ofinans-Digital-Finance-Dashboard-UI-Concept)
-   Backend is in [Repository](https://github.com/NikMrVolk/digital-finance-dashboard-server)

## What's on the project

### Currently implemented

-   Registration and login pages
-   User registration and authentication with access and refresh tokens, which keep in cookies (refresh http only)
-   Progress page with displaying charts and current wallet state

### In the plans

-   Make it possible to confirm email
-   Make profile page
-   Make it possible to reset password
-   Create a portfolio for a specific user, there will be a bank account and an account for shares
-   Add ability to withdraw and top up your account
-   Make it possible to buy and sell shares

## Project launch

You can start use this app with vercel [link](https://digital-finance-dashboard.vercel.app/) or instal app with next rules:

1. clone repository

git clone https://github.com/NikMrVolk/digital-finance-dashboard.git

2. Install dependencies:

npm install

3. Set local variables:

Add file .env.local in the root of the project and add some key and value:

NEXT_PUBLIC_API_URL=https://digital-finance-dashboard-server.onrender.com/api

4. Start dev:

npm run dev

5. Open app in your browser on the link localhost:3000

## App screenshots

### Login and registration pages

<img width="1440" alt="Screenshot 2024-02-05 at 11 55 08" src="https://github.com/NikMrVolk/digital-finance-dashboard/assets/98909861/9e6e4fc8-e84b-41ad-bc06-704447722b28">

<img width="1440" alt="Screenshot 2024-02-05 at 11 56 47" src="https://github.com/NikMrVolk/digital-finance-dashboard/assets/98909861/b01dd9c8-fa06-4363-ae5f-4ffe64a5bf68">

### Progress page

<img width="1440" alt="Screenshot 2024-02-05 at 11 49 56" src="https://github.com/NikMrVolk/digital-finance-dashboard/assets/98909861/9dc1d0cf-6058-4bfb-99e6-069d83d009fb">
