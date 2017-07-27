import style from './style';

const Button = ({text, type, url}) => (
  <a href={url} target="_Blank">
    <button data-wipe={text} value={text} type={type ? type : ""} name={text}>{text}</button>
  </a>
)

export default Button
