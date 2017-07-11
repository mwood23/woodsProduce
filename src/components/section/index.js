import style from './style';

const Section = ({children}) => (
  <section className={style.section}>
    {children}
  </section>
);

export default Section
