import React,{Component} from 'react';
import { compose, withProps } from 'recompose';
import { withAuthentication } from '@axa-fr/react-oidc-context-fetch';

const fetchMock = status => (url, options) => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          status,
        }),
      350,
    );
  });
};

const enhance401 = compose(
  withAuthentication(),
  withProps(props => ({
    handleClick: e => {
      e.preventDefault();
      props
        .fetch('http://localhost:5220/api/values')
        .then((data) => {
            alert("wtf");
            console.log(data);
        })
        .catch(e => alert(e));
    },
  })),
);

const Button401 = ({ handleClick }) => (
  <button onClick={handleClick} type="button">
    Simulate 401
  </button>
);

const Button401Enhance = enhance401(Button401);

const enhance403 = compose(
  withAuthentication(fetchMock(403)),
  withProps(props => ({
    handleClick: e => {
      e.preventDefault();
      props
        .fetch('http://www.demo.url')
        .then(() => alert('fetch end'))
        .catch(e => alert(e));
    },
  })),
);

const Button403 = ({ handleClick }) => (
  <button onClick={handleClick} type="button">
    Simulate 403
  </button>
);

const Button403Enhance = enhance403(Button403);

const enhanceFetch = compose(
  withAuthentication(fetch),
  withProps(props => ({
    handleClick: e => {
      e.preventDefault();
      props
      .fetch('http://localhost:5220/api/values/merhabain')
      .then(res => res.json())
      .then(json => console.log({ data: json }))
      .catch(e => alert(e));
   
       
    },
  })),
);
const ButtonFetch = ({ handleClick }) => (
  <button onClick={handleClick} type="button">
    Simulate Fetch
  </button>
);

const ButtonFetchEnhance = enhanceFetch(ButtonFetch);

export class Home extends Component {


  render() {
    return (
            <div>
              <h1>Home</h1>
              <p>Unprotected home page</p>
              <p>
                <Button403Enhance />
              </p>
              <p>
                <Button401Enhance />
              </p>
              <p>
                <ButtonFetchEnhance />
              </p>
            </div>
      );
    }}


export default Home;
