import { useContext, useEffect} from "react";
import styles from "./css/menu.module.css"
import globalStyles from "../../globalCss/globalStyle.module.css"
import { NavLink } from "react-router-dom";
import client from "../../sanity"
import { urlFor } from "../imageBuilder/imageBuilder";
import { MyContext } from "../../ContextApi";

const menu = `*[_type == "menu"]`;

export interface MenuI {
  _id: string;
  name: string;
  image: {asset: {_ref: string}};
  page_links: {Link_Name: string, Url: string, _key: string}[];
  reservationBtn: {buttonText: string, buttonUrl: string}
}[]

const Menu = () => {
    const {isMenuOpen,setIsMenuOpen,activeItem,setActiveItem,menuData,setMenuData,handleItemClick} = useContext(MyContext)    

     // Effect to load active item from localStorage on page load
  useEffect(() => {
    const storedActiveItem = localStorage.getItem('activeItem');
    if (storedActiveItem) {
      setActiveItem(Number(storedActiveItem));
    }
  }, []);
      
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

    if(menuData.length < 1) {
        return;
    }

    return (
      <div className={styles.containerMenu}>
      <div className={styles.menu}>
        <div className={styles.logo}>
            <img src={ menuData[0]?.image.asset._ref && urlFor(menuData[0]?.image.asset._ref).width(150).url()} width={90} height={90} alt="logo" />
            <h3>{menuData[0]?.name}</h3>
        </div>
        <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <ul className={`${styles.menuItems} ${isMenuOpen ? styles.open : ''}`}>
          {menuData[0]?.page_links?.map((item: any,index:number) => (            
             <li key={item._key}><NavLink to={item.Url} onClick={() => handleItemClick(index)}><span className={Number(index) === activeItem ? globalStyles.active : ''}>{item.Link_Name}</span></NavLink></li>
          ))}            
        </ul>
      </div>
      </div>
    );
  };

  export default Menu