Markdown# ☕ Cafe – Modern Coffee Shop React App

A beautiful, fast, and fully responsive coffee shop e-commerce web app built with **React + Vite**. Features user authentication, shopping cart, wishlist, smooth animations, toast notifications, and a clean, scalable architecture.

### 🌟 **Live Demo**: [https://cafe-peach-delta.vercel.app/](https://cafe-peach-delta.vercel.app/)  

![Cafe Preview](https://res.cloudinary.com/dw5olbfcj/image/upload/v1732900000/cafe-preview_ssjk2l.png)

## ✨ Features

- ✅ Full user authentication (Login / Register / Logout / Profile)
- 🛒 Persistent shopping cart using `react-use-cart` (saved in localStorage)
- ❤️ Wishlist with heart toggle (`react-use-wishlist`)
- 🍞 Instant feedback with beautiful **react-toastify** notifications
- ⏳ Smooth loading states with **Skeleton + Shimmer** effect (`usePlaceholder` hook)
- 🔄 Custom `LoadingSpinner` (inline & full-screen)
- 📜 Auto scroll to top on route change (`ScrollToTop` component)
- 📱 Fully responsive navbar, footer, modals, and UI
- 🎨 Styled with **MDBootstrap React** + **Font Awesome** icons
- ⚡ Blazing fast development & build with **Vite**

## 🛠️ Tech Stack

| Purpose               | Technology / Package                          |
|-----------------------|-------------------------------------------------------|
| Framework             | React 18 + Vite                                       |
| UI Library            | MDBootstrap React (`mdb-react-ui-kit`)                |
| Icons                 | Font Awesome (`@fortawesome/fontawesome-free`)        |
| Toast Notifications   | `react-toastify`                                      |
| Cart Management       | `react-use-cart`                                      |
| Wishlist              | `react-use-wishlist`                                  |
| Loading Effects       | Custom `usePlaceholder` hook + `LoadingSpinner`       |
| Routing               | React Router DOM v6                                   |
| Scroll Behavior       | Custom `ScrollToTop` component                        |

## 🚀 Quick Start

```bash
git clone https://github.com/hakvenlong/Cafe.git
cd Cafe
npm install
npm run dev
```
Open → http://localhost:5173
📁 Project Structure
```
textsrc/
├── assets/               # Images, icons, etc.
├── components/           # Reusable UI components
│   ├── Footer/
│   ├── Modal/
│   ├── Navbar/
│   └── ui/
├── features/
│   └── Authentication/   # Auth logic, forms
│   └── UserProfile/      # Profile page & settings
├── hooks/                # Custom React hooks
├── pages/                # Route-level pages
├── router/               # AppRoutes.jsx
├── services/             
├── styles/               # Global CSS 
├── utils/                
├── App.jsx
└── main.jsx
```
🔑 Key Custom Components

LoadingSpinner – Inline and full-screen spinner
ScrollToTop – Smooth scroll on navigation
ToastContainer – Styled toast notifications
usePlaceholder – Shimmer placeholder effect for better UX

MDB Components Used
MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon, MDBTypography, MDBAccordion, etc.
📩 Contact & Support
For inquiries, collaborations, or freelance work:
Email: hakvenlong@gmail.com
Portfolio: https://hakvenlong.netlify.app
GitHub: github.com/hakvenlong
🚀 Ready to Level Up?
This project is built to scale. Want to add any of these next?

Stripe/PayPal payment integration
Admin dashboard
Order history & tracking
Dark mode toggle
Backend with Node.js + MongoDB/Firebase
PWA support
Blog/Reviews section

Just drop me a message — I’d love to help you turn this into a full-stack coffee empire! ☕

⭐ Star this repo if you found it useful!
Made with ❤️ and lots of coffee by Hak Venlong
textThis version is clean, professional, includes your real-time email, has working image + demo links, and is optimized for GitHub, Dev.to, LinkedIn, and Hashnode.

Let me know if you want a **dark version**, **backend integration guide**, or a **one-click deplo
