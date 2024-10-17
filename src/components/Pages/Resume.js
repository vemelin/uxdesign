import style from './Resume.module.scss';

export const Resume = ({
  ...props
}) => {
  return(
    <div className={style.content}>
      <h3>{props.title}</h3>
    </div>
  )
}
