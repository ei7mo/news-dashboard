# News Dashboard

A client-side news dashboard built with React. Browse top headlines by category, search for any topic, and switch between light and dark mode — powered by the live NewsAPI.

💻 **[Live Demo](https://news-dashboard-ei7.netlify.app)** &nbsp;•&nbsp; **[Source Code](https://github.com/ei7mo/news-dashboard)**

![Screenshot](https://i.postimg.cc/50fq47LP/image.png)

---

## ✨ Features

- Browse top headlines across seven categories (Business, Entertainment, General, Health, Science, Sports, Technology)
- Keyword search across all news, with results updating as you type
- Clearing the search box restores the default headlines for whichever category page you're on
- Light / dark theme toggle, persisted across sessions via `localStorage`
- Responsive card grid layout with article image, title, truncated description, author, publish date, and source
- Powered by the [NewsAPI](https://newsapi.org/) top-headlines and search endpoints

---

## 🛠️ Tech Stack

- **React 19 + TypeScript** — UI and component logic
- **Vite** — build tool and dev server
- **Tailwind CSS 4** — utility-first styling via `@tailwindcss/vite`
- **React Router DOM 7** — client-side routing between category pages
- **NewsAPI** — live headline and search data
- **Font Awesome** — icons (search, theme toggle, mobile menu)

---

## 📁 Project Structure

```
src/
├── apis/
│   └── api.ts              # NewsAPI calls (fetchAllNews, fetchSearchNews)
├── components/
│   ├── Navbar.tsx          # Sticky nav: category links, search, theme toggle
│   └── NewsCard.tsx        # Single article card
├── contexts/
│   └── ThemeContext.tsx    # Light/dark theme state + localStorage persistence
├── css/
│   ├── all.min.css         # Font Awesome icons
│   └── index.css           # Tailwind import + dark mode variant
├── pages/
│   └── Home.tsx             # Category page: fetches & renders article grid
├── types/
│   └── articles.ts          # Article type definition
├── webfonts/                 # Font Awesome font files
├── App.tsx                   # Routes for each news category
└── main.tsx                   # Entry point (ThemeProvider + App)
```
