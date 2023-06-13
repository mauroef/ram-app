import { Link as RouterLink } from 'react-router-dom';

import classes from './Link.module.css';

const Link = (props) => {
  return (
    <RouterLink
      className={`${classes.link} ${props.className} ${
        props.isCTA ? classes['link--cta'] : ''
      }`}
      to={props.redirect}
    >
      {props.children}
    </RouterLink>
  );
};

export default Link;
