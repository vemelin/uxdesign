import style from './About.module.scss';

export const About = ({
  ...props
}) => {
  return(
    <div className={style.content}>
      <h3>{props.title}</h3>
    </div>
  )
}
