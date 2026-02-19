# 📝 Comment App - React & Redux

## 📖 Description

Comment App is a modern React application that allows users to add and delete comments in real time.

The application uses **Redux** to manage the global state of comments efficiently.

---

## ✨ Main Features

- ➕ Add a comment with username
- 🗑️ Delete all comments with one click
- ⚡ Real-time UI update using Redux
- 🎨 Modern and responsive interface
- 🌙 Dark theme design

---

## 🛠️ Technologies Used

- ⚛️ React.js
- 🗃️ Redux
- 🔄 React-Redux
- 💻 JavaScript (ES6)
- 🎨 Modern CSS

---

## 🚀 Installation

### 1️⃣ Clone the repository

```bash
git clone <URL_DU_REPO>
cd comment-app
```
2️⃣ Install dependencies
```
npm install
```

3️⃣ Start the application
```
npm start
```
Open your browser and go to:

http://localhost:3000
🗂️ Project Structure
```
/src
  /actions
    commentaction.js      # ADD_COMMENT & CLEAR_COMMENT actions
  /reducers
    CommentReducer.js     # Manages comments state
  /components
    CommentUser.jsx       # Form + comments display
  App.jsx                 # Main component
  index.js                # Redux Provider + React render
```
🛠️ How to Use
Enter your username in the input field.

Enter your comment in the textarea.

Click Ajouter Commentaire to add a comment.

Click Supprimer Commentaires to delete all comments.

🧪 Example
Input:

User: Nacer
Comment: Super application!
Output:
---
Nacer: Super application!
🎨 Design
🌙 Dark theme
----
🗂️ Card layout for each comment

✨ Hover effects on buttons

📱 Fully responsive (mobile & desktop)
----
💡 Notes
The comments array is empty at startup.

All comments are managed globally using Redux.

State updates trigger automatic UI re-render.
----
👨‍💻 Author
Developed by Naceri mohamed
