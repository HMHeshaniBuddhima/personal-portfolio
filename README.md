
# 💻 Personal Portfolio | Heshani Buddhima

A modern, responsive full-stack personal portfolio website built to showcase my skills, projects, research, education, and certifications.

This portfolio reflects my learning journey as a Computer Science undergraduate and my practical experience in frontend development, backend development, database integration, and web deployment.

## 🌐 Live Website

**[View My Portfolio](https://portfolio-heshani-buddhima.netlify.app/)**

## ✨ Features

- Modern and responsive user interface
- Home and About sections
- Technical and soft skills showcase
- Projects and research information
- Education and certifications
- Contact form with input validation
- Contact message storage using MongoDB Atlas
- Email notifications using EmailJS
- GitHub and LinkedIn integration
- Serverless backend deployment

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| Frontend | React.js, JavaScript, HTML5, CSS3 |
| Build Tool | Vite |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Email Service | EmailJS |
| Serverless Functions | Netlify Functions |
| Version Control | Git, GitHub |
| Deployment | Netlify |

## 📂 Project Structure

```text
personal-portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── netlify/
│   │   └── functions/
│   │       └── api.js
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── netlify.toml
├── .gitignore
└── README.md
```

> The `.env` file is required for local backend development and must not be committed to GitHub.

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/HMHeshaniBuddhima/personal-portfolio.git
cd personal-portfolio
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

Open another terminal in the project root:

```bash
cd backend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `backend` directory:

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

Replace the placeholder with your own MongoDB Atlas connection string.

Never commit credentials or environment files to a public repository.

### 5. Run the Backend

From the `backend` directory:

```bash
npm start
```

The local backend runs at:

```text
http://localhost:5000
```

### 6. Run the Frontend

From the `frontend` directory:

```bash
npm run dev
```

Open the local URL displayed by Vite, usually:

```text
http://localhost:5173
```

> The contact form uses `/api/contact`. For local development, configure a Vite proxy to forward API requests to the backend, or use an environment-based API URL.

## 📩 Contact Form Workflow

1. A visitor fills out the contact form.
2. React sends the message to the backend API.
3. Express validates the submitted information.
4. Mongoose saves the message to MongoDB Atlas.
5. EmailJS sends an email notification.
6. The visitor receives a submission status message.

**API Endpoint:**

```http
POST /api/contact
```

Example request:

```json
{
  "name": "Example User",
  "email": "example@example.com",
  "subject": "Project Inquiry",
  "message": "Hello! I would like to connect."
}
```

## 🚀 Deployment

The portfolio is deployed using Netlify.

- Frontend: React + Vite static build
- Backend: Express API using Netlify Functions
- Database: MongoDB Atlas
- Environment variables: Configured securely in Netlify
- Continuous deployment: Connected to GitHub

**Live URL:** https://portfolio-heshani-buddhima.netlify.app/

## 🔒 Security Notes

- MongoDB credentials are stored in environment variables.
- `.env` files are excluded from version control.
- Contact form input is validated before database insertion.
- Additional production improvements include rate limiting, spam protection, and restricted database network access.

## 🔮 Future Improvements

- Contact form spam protection
- Improved API error handling
- Automated testing
- Performance and accessibility improvements
- Additional projects and certifications

## 👩‍💻 About the Developer

**Heshani Buddhima**

BSc Honours in Computer Science Undergraduate  
University of Vavuniya, Sri Lanka

Interested in software development, web technologies, and continuous learning.

### Connect With Me

- **Portfolio:** [View Website](https://portfolio-heshani-buddhima.netlify.app/)
- **GitHub:** [HMHeshaniBuddhima](https://github.com/HMHeshaniBuddhima)
- **LinkedIn:** [Heshani Buddhima](https://www.linkedin.com/in/heshani-buddhima-316254428)

---

⭐ Thank you for visiting my portfolio repository!
