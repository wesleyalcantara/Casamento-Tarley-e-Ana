import React from 'react';
import App from 'next/app';
import 'tailwindcss/tailwind.css';
import { Box } from '../components/Box';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
    <Box>
        <Component {...pageProps} />
    </Box>
    );
  }
}

export default MyApp;