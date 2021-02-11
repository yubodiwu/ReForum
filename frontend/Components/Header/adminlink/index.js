import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles';

const AdminLink = () => {
  return (
    <div className={styles.adminPageContainer}>
      <Link to="http://localhost:8080/admin">Admin</Link>
    </div>  
  );
};

export default AdminLink;


