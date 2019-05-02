import React,{useState,useEffect} from 'react';

import { AuthenticationConsumer } from '@axa-fr/react-oidc-context';
import { Link } from 'react-router-dom';
import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';
import Layout from '../../Layout'

export default () => (
  
    <AuthenticationConsumer>
      {props => {
       
        return (
          <div>   
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
            <Layout {...props}>
              
            </Layout>
          </div>
        );
      }}
    </AuthenticationConsumer>
 
);
