import React,{Component, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';
import ContainerLayout from './components/ContainerLayout/ContainerLayout';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../Router/Routes";

const linkStyle = {
    color: 'white',
    textDecoration: 'underline',
  };
  
  const theme = {
    global: {
        colors: {
      brand: '#228BE6',
     },
      font: {
        family: 'Roboto',
        size: '14px',
        height: '20px',
      },
    },
  };
  
const headerStyle = {
    display: 'flex',
    backgroundColor: '#26c6da',
    justifyContent: 'space-between',
    padding: 10,
  };  
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
function Layout(props) {
    const [latlng, setLatlng] = useState((props.latlng!=null?props.latlng:[]));

      
    return (
            <div>                                
                    <Grommet theme={theme} full>
                    <Box fill>
                            <AppBar>
                                <h3>
                                <Link style={linkStyle} to="/">
                                HOME
                                </Link>
                                </h3>
                                <Heading level='3' margin='none'>My App</Heading>
                                <Button icon={<Notification />} onClick={() => {}} />

                            </AppBar>
                            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                                <Box flex align='center' justify='center'>                                  
                                  <ContainerLayout>    

                                    
                                    <Routes />

                                    
                                 </ContainerLayout>                                 
                                </Box>
                                <Box
                                width='medium'
                                background='light-2'
                                elevation='small'
                                align='center'
                                justify='center'
                                >
                                            {props.oidcUser || !props.isEnabled ? (

                                                    <ul>
                                                    <li>
                                                        <Link style={linkStyle} to="/dashboard">
                                                        Dashboard
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link style={linkStyle} to="/admin">
                                                        Admin
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link style={linkStyle} to="/profile">
                                                        Profile
                                                        </Link>
                                                    </li>
                                                    <button onClick={props.logout}>logout</button>
                                                    </ul>
                                                  ) : (
                                                     <button onClick={props.login}>login</button>
                                                  )
                                            }
                                </Box>
                            </Box>
                        </Box>
                    </Grommet>
            </div>
            
    );

}

export default Layout;