# OIDSI-PNW Website

[![Vue.js](https://img.shields.io/badge/vue-3-green?logo=vue.js)]()
[![Bootstrap](https://img.shields.io/badge/bootstrap-5-563d7c?logo=bootstrap&logoColor=white)]()
[![Amazon S3](https://img.shields.io/badge/AWS-S3-232F3E?logo=amazonaws&logoColor=white)](https://aws.amazon.com/s3/)
[![CloudFront](https://img.shields.io/badge/AWS-CloudFront-232F3E?logo=amazonaws&logoColor=white)](https://aws.amazon.com/cloudfront/)
[![EmailJS](https://img.shields.io/badge/emailjs-integrated-yellow)](https://www.emailjs.com/)
[![License](https://img.shields.io/badge/license-MIT-blue)]([LICENSE](https://opensource.org/license/mit))

<br/>
<p align="center">
  <img src="/src/assets/images/OIDSIFav.ico" alt="Iwori Bogbe logo" width="150"/><br/>
</p><br/>

The OIDSI-PNW (Seattle Chapter, Ile Iwore-Bogbe) website provides information about chapter events and community activities. Built with Vue.js and AWS, it features a custom design, a contact form for outreach, and integrated Google Calendar for event tracking.

🌐 **Live Site:** [oidsi-pnw.web.app](https://oidsi-pnw.web.app)

## ✨ Features

- **Contact Form** – Direct communication with chapter organizers.
- **Google Calendar Integration** – Stay up to date with scheduled events.
- **Custom Graphics & Branding** – A tailored design to represent OIDSI-PNW.
- **Photo Gallery** – Highlights past events.
- **Responsive Layout** – Works smoothly across devices.
- **AWS S3 + CloudFront** – Fast, global, secure static site delivery.

## 🛠️ Tech Stack

### Frontend

- Vue.js
- HTML, CSS, Bootstrap

### Hosting / Services

- AWS (S3, CloudFront)
- EmailJS (form handling)

## 🚀 Getting Started

Clone this repo and install dependencies:

```bash
git clone https://github.com/quinise/oidsi-pnw.git
cd oidsi-pnw
npm install
npm run dev
```

## 🔧 Configuration

1. Create an EmailJS account [`here`](https://www.emailjs.com/) and generate:
- Public Key
- Template ID
- Service ID

2. Create a `.env.local` file in the root directory and add:

```ini
VITE_EMAILJS_PUBLIC_KEY = PUBLIC_KEY
VITE_EMAILJS_TEMPLATE_ID = TEMPLATE_ID
VITE_EMAILJS_SERVICE_ID = SERVICE_ID
```

## 🧪 Testing

Run end-to-end tests:

```bash
npm run test:e2e
```

## 📜 License

This project is licensed under the MIT License. See [LICENSE](https://opensource.org/license/mit) for details.
