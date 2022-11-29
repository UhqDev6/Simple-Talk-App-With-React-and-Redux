import React from 'react';
import { IoEarthOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = null; // @TODO: get dispatch function from store

  const onRegister = ({ name, id, password }) => {
    // @TODO: dispatch async action to register

    navigate('/');
  };

  return (
    <section className="register-page">
      <header className="register-page__hero">
        <h1><IoEarthOutline /></h1>
      </header>
      <article className="register-page__main">
        <h2>Create your account</h2>
        <RegisterInput register={onRegister} />

        <p>
          Already have an account?
          {' '}
          <Link to="/">Login</Link>
        </p>
      </article>
    </section>
  );
}

export default RegisterPage;
