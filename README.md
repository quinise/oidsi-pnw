# OIDSI-PNW Website

[![Vue.js](https://img.shields.io/badge/vue-3-green?logo=vue.js)]()
[![Bootstrap](https://img.shields.io/badge/bootstrap-5-563d7c?logo=bootstrap&logoColor=white)]()
[![Firebase Hosting](https://img.shields.io/badge/firebase-hosting-orange?logo=firebase)]()
[![EmailJS](https://img.shields.io/badge/emailjs-integrated-yellow)](https://www.emailjs.com/)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

<br/>
<p align="center">
  <img src="/src/assets/images/OIDSIFav.ico" alt="Iwori Bogbe logo" width="150"/><br/>
</p><br/>

The OIDSI-PNW (Seattle Chapter, Ile Iwore-Bogbe) website provides information about chapter events and community activities. Built with Vue.js and Firebase, it features a custom design, a contact form for outreach, and integrated Google Calendar for event tracking.

🌐 **Live Site:** [oidsi-pnw.web.app](https://oidsi-pnw.web.app)

## ✨ Features

- **Contact Form** – Direct communication with chapter organizers.
- **Google Calendar Integration** – Stay up to date with scheduled events.
- **Custom Graphics & Branding** – A tailored design to represent OIDSI-PNW.
- **Photo Gallery** – Highlights past events.
- **Responsive Layout** – Works smoothly across devices.
- **Firebase Hosting** – Fast, reliable, and secure deployment.

## 🛠️ Tech Stack

### Frontend

- Vue.js
- HTML, CSS, Bootstrap

### Hosting / Services

- Firebase (Hosting)
- EmailJS (form handling & event creation)

## 🚀 Getting Started

Clone this repo and install dependencies:

```bash
git clone https://github.com/quinise/oidsi-pnw.git
cd oidsi-pnw
npm install
npm run dev
```

## 🔧 Customize configuration

1. Create an EmailJS account [`here`](https://www.emailjs.com/) and generate a public key
2. Create a `.env` file in the root directory of the project and add a variable `VITE_EMAILJS_PUBLIC_KEY = PUBLICKEY`
3. Deploy to Firebase Hosting.

## 📜 License

This project is licensed under the MIT License.
