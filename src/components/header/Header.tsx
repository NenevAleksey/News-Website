import { FC } from "react";
import './Header.scss';
import { IoSearchOutline } from "react-icons/io5";
import { ReactComponent as Logo } from "../../img/Logo.svg";


const Header: FC = () => {
   return (
      <>
         <header className="header">
            <div className="container">
               <div className="wrapper">
                  <a href="/" className="header-title">
                     <Logo className="logo" />
                  </a>

                  <nav className="header-nav">
                     <a href="/" className="header-link">Главная</a>
                     <a href="#" className="header-link">Афиша</a>
                     <a href="#" className="header-link">О компании</a>
                     <a href="#" className="header-link">Контакты</a>
                  </nav>

                  <div className="header-button">
                     <div className="container-search">
                        <IoSearchOutline className="icon" />
                        <input type="search" id="search" placeholder="Search..." />
                     </div>
                     <button className="login">Войти</button>
                     <button className="register">Регистрация</button>
                  </div>
               </div>
            </div>
         </header>
      </>
   )
}

export default Header;