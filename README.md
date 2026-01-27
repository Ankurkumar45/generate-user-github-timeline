# 🚀 GitHub Repository Timeline Viewer

A modern **React application** that generates a **visual timeline or grid view of any GitHub user’s repositories**, with powerful filtering, sorting, grouping, and export features.

Built with **clean architecture**, **custom hooks**, and a **scalable folder structure** — ideal for portfolios, interviews, and real-world use.

---

## ✨ Features

* 🔍 Search repositories by name, description, or language
* 🧭 Timeline view grouped by **year / month**
* 🧱 Grid view for quick scanning
* 🎛 Advanced filters:

  * Sort by date, stars, name, or size
  * Include / exclude forks
  * Include archived repositories
* ⚡ Fast & optimized using `useMemo`
* 📦 LocalStorage caching for GitHub API calls
* 🌐 Online / Offline network detection
* 📤 Export data:

  * Copy shareable link
  * Copy JSON / Markdown
  * Download JSON file
* 🎨 Clean dark UI with Tailwind CSS
* 📱 Fully responsive design

---

## 🧠 Tech Stack

* **Frontend:** React 18
* **Routing:** React Router DOM
* **Styling:** Tailwind CSS
* **State Management:** React Hooks
* **API:** GitHub REST API
* **Caching:** LocalStorage
* **Build Tool:** Vite / CRA (compatible)

---

## 📁 Project Structure

```
src/
│
├── App.jsx
├── main.jsx
│
├── pages/
│   └── Home.jsx
│
├── components/
│   ├── layout/
│   │   └── Header.jsx
│   │
│   ├── controls/
│   │   └── SearchForm.jsx
│   │
│   ├── profile/
│   │   └── ProfileCard.jsx
│   │
│   └── timeline/
│       ├── TimelineView.jsx
│       ├── RepoItem.jsx
│       └── GroupHeader.jsx
│
├── hooks/
│   ├── useGithubRepos.js
│   ├── useRepoFilters.js
│   └── useNetworkStatus.js
│
├── services/
│   ├── githubApi.js
│   └── index.js
│
├── utils/
│   ├── dateHelpers.js
│   └── formatters.js
│
└── styles/
    └── index.css
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/github-repo-timeline.git
cd github-repo-timeline
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

The app will be available at:
👉 `http://localhost:5173`

---

## 🔑 GitHub API Rate Limits

* Uses **unauthenticated GitHub API**
* Rate limit: **60 requests/hour**
* LocalStorage caching helps reduce API calls

## 🧪 Future Enhancements

* 🔐 GitHub OAuth authentication
* 📊 Language & activity charts
* 🧵 Commit-level timeline
* 🌍 URL-synced filters
* ⚙️ Next.js App Router migration
* 🧪 Unit & integration tests

---

## 👨‍💻 Author

**Ankur Dwivedi**
B.Tech CSE | Full-Stack Developer

* GitHub: [https://github.com/Ankurkumar45](https://github.com/Ankurkumar45)
* LinkedIn: [https://linkedin.com/in/Ankur](https://www.linkedin.com/in/ankur-dwivedi-264209231/)
* Portfolio: https://portfolio-uy8a.vercel.app/

---

## ⭐ Show Your Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork it
* 🧠 Use it as a reference in your own projects

---

## 📄 License

This project is licensed under the **MIT License**.
Feel free to use, modify, and distribute.
