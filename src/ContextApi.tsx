import  { createContext, useState } from 'react';
import { MenuI } from './components/menu/Menu';

const MyContext = createContext<any>({});

const MyProvider = ({ children }: any) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<number | null>(0);
    const [menuData,setMenuData] = useState<MenuI[] | []>([]);

    const handleItemClick = (id:number) => {
        setActiveItem(id);
        localStorage.setItem('activeItem', String(id));
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        setIsMenuOpen(false);
      };


  return (
    <MyContext.Provider value={{isMenuOpen,setIsMenuOpen,activeItem,setActiveItem,menuData,setMenuData,handleItemClick }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
