import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Login() {
    const [displayError, setDisplayError] = React.useState(null);
    const navigate = useNavigate()
  return (
    <main className='container-fluid bg-secondary text-center'>
      <h1 className = "box1">Welcome to TrickTracker</h1>
      <div className="box2">
        <h2 id = "quote">Login to Start Tracking Your Tricks</h2>
      </div>
      <div  id ="loginControls">
        <label>Username:</label>
          <div>
            <input type="text" id="name" placeholder="Enter username here" />
            <input type="text" id="password" placeholder="Enter password here" />
          </div>
          <div>
            <button type="submit" onClick={() => loginUser()}>Login</button>
            <button type="submit" onClick={() => createUser()}>Create User</button>
          </div>
      </div>
      <div>
      <div className='playerName'></div>
      <button variant='primary' onClick={() => navigate('/home')}>
        Play
      </button>
      <button variant='secondary' onClick={() => logout()}>
        Logout
      </button>
    </div>

      {/* <div className="modal fade" id="msgModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-dark">
            <div className="modal-body">error message here</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div> */}
    {/* <script src="login.js"></script> */}
    </main>
  );
}

async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }
  
async function createUser() {
    console.log("createing a user")
    loginOrCreate(`/api/auth/create`);
}
async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#name')?.value;
    const password = document.querySelector('#password')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  
    if (response.ok) {
      localStorage.setItem('username', userName);
      console.log("Authed")
    } else {
      const body = await response.json();
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  }
  function logout() {
    localStorage.removeItem('username');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  }
