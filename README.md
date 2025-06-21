
# 💻 Online Code IDE

An online Integrated Development Environment (IDE) for building and previewing HTML, CSS, and JavaScript projects in real-time. Built using the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS for UI.

## 🚀 Features

* Real-time HTML, CSS, and JavaScript editor
* Live preview of output as you type
* Syntax-highlighted code editors (using CodeMirror/Monaco Editor)
* Persistent code saving (with MongoDB backend)
* Responsive UI with Tailwind CSS
* Project workspace support *(coming soon)*

---

## 🛠️ Tech Stack

### Frontend

* **React** – Component-based UI
* **Tailwind CSS** – Utility-first CSS framework
* **Code Editor** – [Monaco Editor](https://microsoft.github.io/monaco-editor/) 

### Backend

* **Node.js** – JavaScript runtime
* **Express** – Backend framework
* **MongoDB** – For saving user projects and code snippets

---

## ✅ Completed

* [x] React frontend with three code panes: HTML, CSS, JS
* [x] Live preview pane using `<iframe>`
* [x] Local code state management

---

## 🧩 In Progress

* [ ] Backend API to save and fetch code snippets
* [ ] User authentication (JWT or OAuth)
* [ ] MongoDB schema for storing projects
* [ ] Deployment with CI/CD (Vercel for frontend, Render/Heroku for backend)

---

## 📸 Screenshots



---

## ⚙️ Getting Started

### 1. Clone the repo

```npm
git clone https://github.com/ambarish35e/CODE-IDE.git
cd online-code-ide
```

### 2. Install frontend dependencies

```npm
cd frontend
npm install
npm run dev
```

### 3. Backend Setup (WIP)

```npm
cd server
npm install
npm run dev
```

> MongoDB URI and environment variables should be added in a `.env` file



---

## 📄 License

MIT License – Feel free to use, modify, and share.

---


