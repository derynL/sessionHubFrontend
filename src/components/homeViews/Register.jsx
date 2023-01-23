import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../../css/register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState('');

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const nav = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      document.getElementById('Message').style.color = '';
      document.getElementById('Message').innerHTML = '';
      const user = { name: { firstName, lastName }, email, password };
      if (firstName && lastName && email && password) {
        const res = await axios.post(`http://localhost:4000/register`, user);
        setMsg(res.data.message);
        setShow(true);
        document.getElementById('Message').style.color = 'Green';
        document.getElementById('Message').innerHTML = 'Login successful';
        if (res.data.message === 'User was registered successfully') {
          sleep(2000).then((r) => {
            nav('/');
          });
        }
        return;
      }
      document.getElementById('Message').style.color = 'Red';
      document.getElementById('Message').innerHTML = 'Invalid input';
    }
    document.getElementById('Message').style.color = 'Red';
    document.getElementById('Message').innerHTML = 'Passwords do NOT match!';
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Response</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg}</Modal.Body>
      </Modal>
      <div className='container form-container'>
        <h2 className='text-center'>Digital Futures</h2>
        <h5 className='text-center'>Create a new account</h5>
        <div className='d-flex justify-content-center'>
          <div className='row align-items-end'>
            <div className='col-md-auto'>
              <form className='column' onSubmit={register}>
                <div className='form-control border-0'>
                  <FontAwesomeIcon className='fontAwesomeIcon' icon={faUser} />
                  <label htmlFor='firstname'>First Name</label>
                  <input
                    className='form-control'
                    type='text'
                    id='firstname'
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder='First Name'
                    required
                  />

                  <FontAwesomeIcon className='fontAwesomeIcon' icon={faUser} />
                  <label htmlFor='lastname'>Last Name</label>
                  <input
                    className='form-control'
                    type='text'
                    id='lastname'
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder='Last Name'
                    required
                  />

                  <FontAwesomeIcon
                    className='fontAwesomeIcon'
                    icon={faEnvelope}
                  />
                  <label htmlFor='email'>Email</label>
                  <input
                    className='form-control'
                    type='email'
                    id='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder='Email'
                    required
                  />

                  <FontAwesomeIcon className='fontAwesomeIcon' icon={faLock} />
                  <label htmlFor='password'>Password</label>
                  <input
                    className='form-control'
                    type='password'
                    id='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder='Password'
                    required
                  />

                  <FontAwesomeIcon className='fontAwesomeIcon' icon={faLock} />
                  <label htmlFor='confirmPassword'>Confirm </label>
                  <input
                    className='form-control'
                    type='password'
                    id='confirmPassword'
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    placeholder='Confirm Password'
                    required
                  />
                  {confirmPassword !== password && <p>Passwords don't match</p>}

                  <button
                    className='register btn btn-primary'
                    onClick={register}
                  >
                    Register
                  </button>

                  <span id='Message'></span>
                  <br />
                  <small>
                    Already have an account?&nbsp;
                    <Link to='/login'>Login</Link>
                  </small>
                </div>
              </form>
            </div>
            <div className='passwordHelp col-md-auto'>
              <small id='passwordHelp' className='form-text text-muted'>
                Password must:
                <ul>
                  {password.length < 8 && (
                    <li>contain a minimum of 8 characters</li>
                  )}
                  {password.match(/\d/) === null && <li>contain a number</li>}
                  {password.match(/[A-Z]/) === null && (
                    <li>contain an uppercase letter</li>
                  )}
                  {password.match(/[a-z]/) === null && (
                    <li>contain a lowercase letter</li>
                  )}
                </ul>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
