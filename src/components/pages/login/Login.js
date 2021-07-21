import React from 'react'
import useLoginForm from "./loginLogic";
import "./Login.css";

function Login() {
  const [{username, password, loading, message}, handleEmailChange, handlePasswordChange, handleSubmit] = useLoginForm();

  return (
    <div className="publicForm-container">
      <h1>Entrar</h1>

      <form onSubmit={handleSubmit}>
        <div className="txt-field">
          <input type="text" required value={username}
                 autoComplete="off" onChange={handleEmailChange}/>
          <span/>
          <label>Email</label>
        </div>

        <div className="txt-field">
          <input type="password" required value={password}
                 autoComplete="off" onChange={handlePasswordChange}/>
          <span/>
          <label>Senha</label>
        </div>

        <button type="submit" className={loading ? "spinner publicForm-btn" : "publicForm-btn"}>
          {loading ? "" : "Entrar"}
        </button>

        {message.length > 0 && (
          <div className="message-error">
            <p>* {message}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
