import classes from './Error.module.css';

const Error = (props) => {
  return (
    <div className={classes['error__container']}>
      {props.children}
    </div>
  );
};

export default Error;
