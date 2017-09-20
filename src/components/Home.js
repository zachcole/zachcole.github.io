import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';
import AppBar from 'material-ui/AppBar';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Col from 'react-bootstrap/lib/Col';

export default function Home() {
  const repoReadmeLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/rafrex/spa-github-pages#readme"
    >{text}</Interactive>
  );

  return (
    <div>
      <AppBar
        title="Zach Cole"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <Col md={6} mdOffset={4}>
        <Jumbotron>
          <h1>Coming Soon!</h1>
          <p>Still under construction...</p>
        </Jumbotron>
      </Col>
    </div>
  );
}