import React from 'react';
import { Link } from 'react-router-dom';
import classes from './style.module.css';

const Navbar = () => (
  <div className={classes.navbar}>
    <div className={classes.brand}>Awesome Blog</div>
    <ul className={classes.nav}>
      {['Home', 'About', 'Contact'].map((label, index) => (
        <li key={index} className={classes.navItem}>
          <Link to={label.toLowerCase()}>{label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Content = ({ content }) => (
  <div className={classes.content}>
    <div className={classes.innerContent}>{content}</div>
  </div>
);

const Footer = () => (
  <div className={classes.footer}>© Copyright - Awesome Company - 2020</div>
);

const Layout = ({ children }) => (
  <div className={classes.layout}>
    <Navbar />
    <Content content={children} />
    <Footer />
  </div>
);

export default Layout;
