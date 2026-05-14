import React, { useState, useEffect } from "react";
import Content from "./Content";
import HookState from './HookState'
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [user, setUser] = useState(null);

  // 🔐 Generate random captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    let cap = "";
    for (let i = 0; i < 5; i++) {
      cap += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(cap);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = () => {
    if (isLogin && inputCaptcha !== captcha) {
      alert("Captcha incorrect ❌");
      return;
    }
    // Simulate success
    setUser({ name: isLogin ? 'User' : 'New User', email: 'user@example.com' });
    setShowContent(true);
    alert(isLogin ? "Login Success ✅" : "Registered ✅ Welcome!");
  };

  if (showContent) {
    return (
      <div className="page">
        <h1 className="title">LearnersWEB 🚀</h1>
        <div className="content-section" style={{textAlign:"center"}}>
          <h2>Welcome back, {user?.name}! 👋</h2>



          <Content />
          <br />
          <HookState />

          <button onClick={() => {setShowContent(false); setUser(null); setIsLogin(false);}} style={{color:"white",background:"blue",fontSize:"20px",borderRadius:"10px",border:"5px solid white"}}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">

      <h1 className="title">Welcome to LearnersWEB 🚀</h1>

      <div className="card">

        <h2>{isLogin ? "Login" : "Register"}</h2>

        {!isLogin && <input placeholder="Full Name" />}
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        {!isLogin && <input type="password" placeholder="Confirm Password" />}

        {/* 🔐 Captcha */}
        {isLogin && (
          <>
            <div className="captcha-box">
              <span>{captcha}</span>
              <button onClick={generateCaptcha}>↻</button>
            </div>

            <input
              placeholder="Enter Captcha"
              onChange={(e) => setInputCaptcha(e.target.value)}
            />
          </>
        )}
        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p className="toggle" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "New user? Register" : "Already have account? Login"}
        </p>
      </div>
    </div>
  );
}

export default App;
