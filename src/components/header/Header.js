import React from "react"
import style from './Header.module.scss'

export const Header = ({
  ...props
}) => {
  return (
    <div className={style.header}>
      <div>
        <div>
          <p>
            👋 Hi there, <br />
            My name is Vasiliy, I'm a
          </p>
        </div>
      <div>
        <h1>Product and UI/UX Designer</h1>
      </div>
    </div>
    </div>
  )
}