
import React, { useState } from 'react';
import '../../src/assets/css/bootstrap.min.css';
import '../../src/assets/css/responsive.css';
import '../../src/assets/css/app.min.css';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedData = localStorage.getItem('formState');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (formData.email === parsedData.data.email && formData.password === parsedData.data.password) {
        setError('');
        toast.success('Login successful');
        window.location.href = 'https://www.figma.com/design/fNN807R3JHPN4YF73dqUrY/Web-3D-UI?node-id=4-2&t=wt8Alz3i0Y4sjFQA-0'; // Redirect to the external URL
      } else {
        setError('Invalid email or password');
      }
    } else {
      setError('No stored data found');
    }
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
          <div className="card card_shadow">
            <div className="card-body card-body-adjustment">
              <h2>Login Page</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
