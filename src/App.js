import React, { Component } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
//import SignUpForm from './components/SignUpForm/SignUpForm';
//import SignInForm from './components/SignInForm/SignInForm';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import ClippedDrawer from './components/Menu';
Amplify.configure(aws_exports);

const App = () => (
  <div>
    <AmplifySignOut />
    <ClippedDrawer/>
    
  </div>
);

export default withAuthenticator(App);