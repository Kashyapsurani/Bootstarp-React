import { useState } from 'react';
import './App.css';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

  const validateUsername = (username) => {
    return username.length >= 3;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, password, confirmPassword } = formData;

    if (!validateUsername(name)) {
      Swal.fire({
        title: "Validation Error!",
        text: "Username must be at least 3 characters long.",
        icon: "error"
      });
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire({
        title: "Validation Error!",
        text: "Please enter a valid email address.",
        icon: "error"
      });
      return;
    }

    if (!validatePassword(password)) {
      Swal.fire({
        title: "Validation Error!",
        text: "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.",
        icon: "error"
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        title: "Validation Error!",
        text: "Password and Confirm Password do not match.",
        icon: "error"
      });
      return;
    }

    Swal.fire({
      title: "Successful Validation",
      text: "You successfully submitted the form!",
      icon: "success"
    });

    setFormData({ name: '', email: '', message: '', password: '', confirmPassword: '' });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://via.placeholder.com/50"
              alt="logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
            MyApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More Options
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Swiper Section */}
      <section id="home" className="my-5">
        <Swiper spaceBetween={50} slidesPerView={1}>
          <SwiperSlide>
            <img src="https://via.placeholder.com/800x400" alt="Slide 1" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://via.placeholder.com/800x400" alt="Slide 2" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://via.placeholder.com/800x400" alt="Slide 3" className="img-fluid" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* About Section with Cards */}
      <section id="about" className="container my-5">
        <h2 className="text-center">About Our App</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Feature 1" />
              <div className="card-body">
                <h5 className="card-title">Feature 1</h5>
                <p className="card-text">Description of feature 1.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Feature 2" />
              <div className="card-body">
              <h5 className="card-title">Feature 2</h5>
                <p className="card-text">Description of feature 2.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Feature 2" />
              <div className="card-body">
                <h5 className="card-title">Feature 2</h5>
                <p className="card-text">Description of feature 2.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Feature 2" />
              <div className="card-body">
                <h5 className="card-title">Feature 2</h5>
                <p className="card-text">Description of feature 2.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="container my-5">
        <h2 className="text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="btn border w-25"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                className="btn border w-25"
                onClick={toggleConfirmPasswordVisibility}
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer bg-light text-center text-lg-start">
        <div className="text-center p-3" style={{ backgroundColor: "#f8f9fa" }}>
          © 2024 MyApp. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
