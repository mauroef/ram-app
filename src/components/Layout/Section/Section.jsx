import classes from './Section.module.css';
const Section = ({ title, children }) => {
  return (
    <section className={classes.section}>
      <div className={classes['section__inner']}>
        {title && <h2 className={classes['section__title']}>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;
