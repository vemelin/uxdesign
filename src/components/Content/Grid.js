import style from './Grid.module.scss';
import work1 from '../../portfolio_assets/buildSignature.png'
import work2 from '../../portfolio_assets/example1.png'
import work3 from '../../portfolio_assets/example2.png'
import work4 from '../../portfolio_assets/example3.png'
import work5 from '../../portfolio_assets//fleetView.png'
import work6 from '../../portfolio_assets/toyotaOEM_LP.png'
import work7 from '../../portfolio_assets/tenTrucks.png'
import work8 from '../../portfolio_assets/kerkman.png'

export const Grid = ({
  ...props
}) => {
  return(
    <div className={style.content}>

      <div className={style.row}>
        <div className={style.left}>
          <div>
            <img src={work2} />
          </div>
          <div className={style.row1}>
            <div><img src={work3} /></div>
            <div><img src={work4} /></div>
          </div>
        </div>
        
        <div className={style.right}>
          <img src={work1} />
        </div>
      </div>

      <div className={style.row}>
        <div className={style.left}>
            <img src={work5} />
        </div>
        
        <div className={style.right}>
          <img src={work6} />
        </div>
      </div>

      <div className={style.row}>
        <div className={style.left}>
            <img src={work7} />
        </div>
        
        <div className={style.right}>
          <img src={work8} />
        </div>
      </div>

    </div>
  )
}