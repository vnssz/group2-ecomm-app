import {useNavigate} from 'react-router-dom';

import { Menubar } from "primereact/menubar";
import { Button } from 'primereact/button';

const Navbar = () => {
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      url: "/",
    },
    {
      label: "Product",
      icon: "pi pi-fw pi-shopping-bag",
      // url: "/product",
      url: "/product2",
    },
    {
      label: "Contact",
      icon: "pi pi-fw pi-mobile",
      url: "/contact",
    },
    {
      separator: true,
    },
    {
      separator: true,
    },
    {
      label: "Users",
      icon: "pi pi-fw pi-user",
      // url:"/user",
      items: [
        // {
        //   label: "Login",
        //   icon: "pi pi-fw pi-user-plus",
        // },
        {
          label: "Settings",
          icon: "pi pi-fw pi-cog",
          url: "/usersettings",
        },
      ],
    },
  ];

  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate('/cart');
  };

  const start = <img alt="logo" src="https://i.ibb.co/N7wnYN2/logo-2.jpg" onError={(e) => e.target.src='https://i.ibb.co/N7wnYN2/logo-2.jpg'} height="40" className="mr-2"></img>;
  const end = <Button label= "Add to Cart" icon= "pi pi-fw pi-shopping-cart"  onClick={navigateToCart}/>;

  return (
    <div>
      <div>
        <Menubar model={items}  start={start} end={end} />
      </div>
    </div>
  );
};

export default Navbar;
