import style from './Grid.module.scss';
import work1 from '../../portfolio_assets/bulkSignature.jpg'
import work2 from '../../portfolio_assets/example1.jpg'
import work3 from '../../portfolio_assets/example2.jpg'
import work4 from '../../portfolio_assets/example3.jpg'
import work5 from '../../portfolio_assets//fleetView.jpg'
import work6 from '../../portfolio_assets/ToyotaOEM_MLP.jpg'
import work7 from '../../portfolio_assets/tenTrucks.png'
import work8 from '../../portfolio_assets/kerkman.jpg'
import work9 from '../../portfolio_assets/dealersocket_dashboard.jpg'

export const Grid = ({
  ...props
}) => {
  return(
    <div className={style.content}>

      <div className={style.row}>
        <div className={[style.left, style.rounded].join(' ')}>
          <div className={[style.rounded, style.firstImage].join(' ')}>
            <a href='https://www.figma.com/proto/1wkq1MuCHG11boDh849LQa/Portfolio?page-id=259%3A21&node-id=3178-12361&node-type=canvas&viewport=926%2C470%2C0.13&t=S5eSXN1ves1xgf79-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3178%3A12361' target='_blank'>
              <img src={work2} />
            </a>
          </div>
          <div className={style.row1}>
            <div className={style.rounded}>
              <a href='https://www.figma.com/proto/1wkq1MuCHG11boDh849LQa/Portfolio?page-id=3020%3A4823&node-id=3057-16833&node-type=frame&viewport=-1731%2C824%2C0.29&t=uRh2jc2iKmDWcQpp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3057%3A16833&show-proto-sidebar=1' target='_blank'>
                <img src={work3} />
              </a>
            </div>
            <div className={style.rounded}>
              <a href='https://www.figma.com/proto/1wkq1MuCHG11boDh849LQa/Portfolio?page-id=0%3A1&node-id=3178-12362&node-type=canvas&viewport=171%2C-115%2C0.12&t=vz56EtQcqCI2FxcW-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3178%3A12362' target='_blank'>
                <img src={work4} />
              </a>
            </div>
          </div>
        </div>
        
        <div className={[style.right, style.rounded].join(' ')}>
          <a href='https://www.figma.com/proto/1wkq1MuCHG11boDh849LQa/Portfolio?page-id=3519%3A2&node-id=3559-4745&node-type=canvas&viewport=914%2C507%2C0.04&t=6DNIOA3QVZVTHXSj-1&scaling=scale-down-width&content-scaling=fixed' target="_blank">
            <img src={work1} />
          </a>
        </div>
      </div>

      <div className={style.row}>
        <div className={[style.left, style.rounded].join(' ')}>
          <a href='https://www.figma.com/proto/1wkq1MuCHG11boDh849LQa/Portfolio?page-id=3689%3A546&node-id=3723-1506&node-type=canvas&viewport=914%2C372%2C0.05&t=akUXl5hETQK3Dyou-1&scaling=scale-down-width&content-scaling=fixed' target='_blank'>
            <img src={work5} />
          </a>
        </div>
        
        <div className={[style.right, style.rounded].join(' ')}>
          <a href='https://www.figma.com/proto/1wkq1MuCHG11boDh849LQa/Portfolio?page-id=2114%3A5187&node-id=2114-8125&node-type=canvas&viewport=603%2C107%2C0.02&t=lweUnW24qeOFkbS6-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2114%3A8125' target='_blank'>
            <img src={work6} />
          </a>
        </div>
      </div>

      <div className={style.row}>
        <div className={[style.left, style.rounded].join(' ')}>
          <a href='https://www.figma.com/proto/1wkq1MuCHG11boDh849LQa/Portfolio?page-id=2108%3A1236&node-id=2111-13872&node-type=canvas&viewport=814%2C434%2C0.06&t=lqWPG0mmwpQ5QsBK-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2111%3A13872' target='_blank'>
            <img src={work7} />
          </a>
        </div>
        
        <div className={[style.right, style.rounded].join(' ')}>
          <a href='https://www.figma.com/proto/1wkq1MuCHG11boDh849LQa/Portfolio?page-id=1408%3A457&node-id=1408-1198&node-type=canvas&viewport=538%2C609%2C0.06&t=LwSOphTivMZIq5fQ-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1408%3A1198&show-proto-sidebar=1' target='_blank'>
            <img src={work8} />
          </a>
        </div>
      </div>

      <div className={style.row}>
        <div className={[style.left, style.rounded].join(' ')}>
          <a href='https://www.figma.com/proto/1wkq1MuCHG11boDh849LQa/Portfolio?node-id=3178-11631&node-type=canvas&m=dev&scaling=scale-down-width&content-scaling=fixed&page-id=240%3A2&starting-point-node-id=3178%3A11631&t=Vj3nQhgSc1TRBhYZ-1' target='_blank'>
            <img src={work9} />
          </a>
        </div>
        
        <div className={[style.right, style.rounded].join(' ')}>
          <a href='#' target='_blank'>
            {/* <img src={work8} /> */}
          </a>
        </div>
      </div>

    </div>
  )
}