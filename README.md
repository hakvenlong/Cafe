Markdown# ☕ Cafe – Modern Coffee Shop React App

A beautiful, fast, and scalable coffee shop e-commerce app built with **React 18 + Vite**, featuring authentication, cart, wishlist, smooth animations, and a clean feature-first architecture.

Live Demo: https://cafe-hakvenlong.netlify.app  
(Deployed with Netlify — always up to date!)

[![Preview](https://res.cloudinary.com/dw5olbfcj/image/upload/v1732900000/cafe-preview_ssjk2l.png)](https://cafe-bow5.vercel.app/)
> Replace the image link above with your actual screenshot later

## ✨ Features

- Full user authentication (Login / Register / Profile)
- Shopping cart with `react-use-cart` (persisted in localStorage)
- Wishlist with heart toggle (`react-use-wishlist`)
- Instant feedback with **react-toastify** (success, error, info toasts)
- Smooth loading states: **Skeleton + Shimmer** via `usePlaceholder` hook
- Custom reusable `LoadingSpinner` (inline & full-screen)
- Auto scroll to top on route change (`ScrollToTop` component)
- Responsive navbar, footer, modals, and UI components
- Font Awesome icons + MDBootstrap React styling
- Blazing fast with **Vite**

## Tech Stack
```
| Purpose                | Technology / Package                                      |
|-----------------------|------------------------------------------------------------|
| Framework             | React 18 + Vite                                            |
| UI Library            | MDBootstrap React (`mdb-react-ui-kit                     |
| Icons                 | @fortawesome/fontawesome-free                              |
| Toast Notifications   | react-toastify                                             |
| Cart                  | react-use-cart                                             |
| Wishlist              | react-use-wishlist                                         |
| Loading Effects       | Custom `usePlaceholder` + `LoadingSpinner`                 |
| Routing               | React Router DOM v6                                        |
| Scroll Behavior       | `ScrollToTop` component                                    |
```

## Current Folder Structure (Exact Match)
```
src/
├── assets/
├── components/
│   ├── Footer/
│   ├── Modal/
│   ├── Navbar/
│   └── ui/            
├── data/               
├── features/
│   └── Authentication/  
│       ├── UserProfile/
│       ├── components/
│       ├── css/
│       ├── hooks/
│       ├── layout/
│       ├── pages/
│       └── services/
│   └── UserProfile/   
│       ├── components/
│       ├── css/
│       ├── hooks/
│       ├── layout/
│       ├── pages/
│       └── services/
├── hooks/             
├── pages/             
│   ├── About.jsx
│   ├── FAQs.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   └── Policy.jsx
├── router/
│   └── AppRoutes.jsx    
├── services/        
├── styles/             
├── utils/             
├── App.jsx
├── main.jsx
└── .env
```
text## Quick Start

```bash
git clone https://github.com/hakvenlong/Cafe.git
cd Cafe
npm install
npm run dev
Open → http://localhost:5173
Key Custom Components
```

LoadingSpinner – full-screen & inline
ScrollToTop – smooth scroll on every navigation
ToastContainer – beautifully styled react-toastify
usePlaceholder – shimmer placeholder effect
All MDB components used:JavaScriptMDBCol, MDBContainer, MDBRow, MDBTypography,
MDBIcon, MDBAccordion, MDBAccordionItem

Ready for the Next Level?
This project is built to scale fast. Just say the word and I’ll help you add:

<img width="1920" height="4227" alt="screencapture-cafe-bow5-vercel-app-2025-11-29-12_37_05" src="https://github.com/user-attachments/assets/97dc7a43-0c59-4f3b-abf9-d0251f1070f9" />

