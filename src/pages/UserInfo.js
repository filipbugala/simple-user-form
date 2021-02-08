import React from 'react';
import {useSelector } from 'react-redux';

import {MainLayout} from '../components/MainLayout';

export const UserInfo = (props) =>{
    const store = useSelector(state => state);
    let users = store.users;
    let firstname, lastname, email, phone;


    if(users) {
      firstname = users.firstname;
      lastname = users.lastname;
      email = users.email;
      phone = users.phone;
    }

    return (
      <MainLayout>
        <section className="user-data-section">
          <div className="user-avatar">
            <svg width="150" height="200" viewBox="0 0 150 200">
              <rect width="150" height="200" rx="10" ry="10" fill="#CCC" />
            </svg>
          </div>
          <div className="user-data">
            <h3>First name: {firstname}</h3>
            <h3>Last name: {lastname}</h3>
            <h3>email: {email}</h3>
            <h3>phone: {phone}</h3>
          </div>
        </section>
      </MainLayout>
    )

}