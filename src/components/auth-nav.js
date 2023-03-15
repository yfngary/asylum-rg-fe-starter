import React from 'react';
import AuthenticationButton from './authentication-button';
import SignUpButton from './signup-button';

const AuthNav = () => (
  <div className="navbar-nav ml-auto">
    <AuthenticationButton />
    <SignUpButton />
  </div>
);

export default AuthNav;
