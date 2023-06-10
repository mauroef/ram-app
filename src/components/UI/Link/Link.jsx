import classes from './Link.module.css';

const Link = (props) => {
  return(<a className={`${classes.link} ${props.className}`} href={props.redirect}>{props.children}</a>)
}

export default Link;