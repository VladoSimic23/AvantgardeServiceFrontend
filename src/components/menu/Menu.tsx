import { useEffect, useState } from "react";
import styles from "./css/menu.module.css"
import globalStyles from "../../globalCss/globalStyle.module.css"
import { NavLink } from "react-router-dom";
import client from "../../sanity"
import { urlFor } from "../imageBuilder/imageBuilder";

const menu = `*[_type == "menu"]`;

interface MenuI {
  _id: string;
  name: string;
  image: {asset: {_ref: string}};
  page_links: {Link_Name: string, Url: string, _key: string}[];
  reservationBtn: {buttonText: string, buttonUrl: string}
}[]

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<number | null>(0);
    const [menuData,setMenuData] = useState<MenuI[] | []>([]);
      
    useEffect(() => {
        const fetchData = async () => {
          const res = await client.fetch(menu);
          setMenuData(res)
        }
        fetchData()
      },[])
     
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const handleItemClick = (id:number) => {
      setActiveItem(id);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    if(!menuData) {
        return;
    }

    return (
      <div className={styles.containerMenu}>
      <div className={styles.menu}>
        <div className={styles.logo}>
            <img src={ menuData[0]?.image.asset._ref && urlFor(menuData[0]?.image.asset._ref).width(150).url()} alt="logo" />
            <h3>{menuData[0]?.name}</h3>
        </div>
        <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <ul className={`${styles.menuItems} ${isMenuOpen ? styles.open : ''}`}>
          {menuData[0]?.page_links?.map((item,index:number) => (            
             <li key={item._key}><NavLink to={item.Url} onClick={() => handleItemClick(index)}><span className={Number(index) === activeItem ? globalStyles.active : ''}>{item.Link_Name}</span></NavLink></li>
          ))}
             {menuData[0]?.reservationBtn.buttonText && <li ><a href={menuData[0]?.reservationBtn.buttonUrl} target="_blank" className={styles.reservationBtn}>{menuData[0]?.reservationBtn.buttonText}</a></li>}
        </ul>
      </div>
      </div>
    );
  };

  export default Menu