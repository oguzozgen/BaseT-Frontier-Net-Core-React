import React,{useState,useEffect} from 'react';

import { AuthenticationConsumer } from '@axa-fr/react-oidc-context';
import { Link } from 'react-router-dom';
import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';
import NaviBar from '../Layout/Layout'

const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
  );



export default () => (
  
    <AuthenticationConsumer>
      {props => {
       
        return (
          <div>   
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
            <NaviBar {...props}>
              
            </NaviBar>
          </div>
        );
      }}
    </AuthenticationConsumer>
 
);
