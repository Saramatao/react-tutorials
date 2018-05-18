import React, { Component } from 'react';
import Button from './Button';
import './index.css';

const Loading = () =>
  <div>Loading ...</div>

const withLoading = (Component) => (props) =>
  props.isLoading
    ? <Loading />
    : <Component { ...props } />

const ButtonWithLoading = withLoading(Button);

export default ButtonWithLoading;