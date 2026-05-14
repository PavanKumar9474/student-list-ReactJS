import React, { useState } from "react";

function Content() {
  const [active, setActive] = useState(null);

  const toggle = (section) => {
    setActive(active === section ? null : section);
  };

  return (
    <div className="content-container"  style={{border:"5px solid black",borderRadius:"20px"}}>
      <h2 className="heading">📘 Full Stack Learning Guide</h2>

      {/* NODE */}
      <div className="section">
        <button onClick={() => toggle("node")} className="section-btn">
          ⚙️ Install Node.js
        </button>

        {active === "node" && (
          <div className="section-content">
            <ol>
              <li>Go to https://nodejs.org</li>
              <li>Download <b>LTS version</b></li>
              <li>Install using default settings</li>
              <li>Open terminal and run:</li>
            </ol>

            <pre>node -v</pre>

            <p>👉 If version shows → installation successful</p>
          </div>
        )}
      </div>

      {/* REACT */}
      <div className="section">
        <button onClick={() => toggle("react")} className="section-btn">
          ⚛️ Create React App (Vite)
        </button>

        {active === "react" && (
          <div className="section-content">
            <p><b>Step 1:</b> Create project</p>
            <pre>npm create vite@latest my-app</pre>

            <p><b>Step 2:</b> Move inside folder</p>
            <pre>cd my-app</pre>

            <p><b>Step 3:</b> Install dependencies</p>
            <pre>npm install</pre>

            <p><b>Step 4:</b> Run project</p>
            <pre>npm run dev</pre>

            <p>👉 Open: http://localhost:5173</p>
          </div>
        )}
      </div>

      {/* FOLDER */}
      <div className="section">
        <button onClick={() => toggle("structure")} className="section-btn">
          📂 React Folder Structure
        </button>

        {active === "structure" && (
          <div className="section-content">
            <pre>
{`my-app/
 ├── src/
 │   ├── components/
 │   │   ├── Register.jsx
 │   │   ├── Login.jsx
 │   ├── App.jsx
 │   ├── main.jsx
 ├── public/
 ├── package.json`}
            </pre>

            <ul>
              <li><b>App.jsx</b> → main UI</li>
              <li><b>components/</b> → reusable UI</li>
              <li><b>main.jsx</b> → entry point</li>
            </ul>
          </div>
        )}
      </div>

      {/* REGISTER UI */}
      <div className="section">
        <button onClick={() => toggle("register")} className="section-btn">
          🧾 Register Page Example
        </button>

        {active === "register" && (
          <div className="section-content">
            <pre>
{`function Register() {
  return (
    <div>
      <input placeholder="Email" />
      <input placeholder="Password" />
      <button>Register</button>
    </div>
  );
}`}
            </pre>

            <p>👉 This UI sends data to backend using API</p>
          </div>
        )}
      </div>

      {/* API */}
      <div className="section">
        <button onClick={() => toggle("api")} className="section-btn">
          🐍 FastAPI + CRUD
        </button>

        {active === "api" && (
          <div className="section-content">
            <ul>
              <li><b>GET</b> → Read data</li>
              <li><b>POST</b> → Create data</li>
              <li><b>PUT</b> → Update data</li>
              <li><b>DELETE</b> → Delete data</li>
            </ul>

            <pre>
{`@app.post("/users")
def create_user(user):
    db.add(user)
    db.commit()`}
            </pre>
          </div>
        )}
      </div>

      {/* CONNECT */}
      <div className="section">
        <button onClick={() => toggle("connect")} className="section-btn">
          🔗 Connect Frontend & Backend
        </button>

        {active === "connect" && (
          <div className="section-content">
            <pre>
{`fetch("http://127.0.0.1:8000/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
})`}
            </pre>

            <p>👉 User enters form → React → API → DB stores data</p>
          </div>
        )}
      </div>

      {/* DEPLOY */}
      <div className="section">
        <button onClick={() => toggle("deploy")} className="section-btn">
          🌐 GitHub + Vercel
        </button>

        {active === "deploy" && (
          <div className="section-content">
            <pre>
{`git add .
git commit -m "update"
git push`}
            </pre>

            <p>👉 Push → GitHub → Vercel auto deploy 🚀</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
