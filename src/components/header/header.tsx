import React from 'react';
import style from './header.module.css'

export interface HeaderProps {
  isSignedIn: boolean
}


export const Header: React.FC<HeaderProps> = ({ isSignedIn }) => {
  return (
    <header className={style.header}>
      <div className={style.headerWrapper}>
        <div className="header-logo">Logo</div>
        <nav >
          <ul className={style.headerList}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </nav>
        <div>{isSignedIn ? 'Sign Out' : "Sign In"}</div>
      </div>
    </header>
  )
}
