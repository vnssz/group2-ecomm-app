import { Menubar } from "primereact/menubar";


const Navbar = () => {
   
        const items = [
          {
            label: "Home",
            icon: "pi pi-fw pi-home",
            url: "/"
          },
          {
            label: "Product",
            icon: "pi pi-fw pi-shopping-bag",
            url: "/product"
          },
          {
            label: "Contact",
            icon: "pi pi-fw pi-mobile",
            url: "/contact"
          },
          {
            separator:true
          },
          {
            label:"",
            icon:"pi pi-fw pi-shopping-cart",
            url:"/cart",
        },
        {
          separator:true
        },
        {label: "Users",
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
              url:"/usersettings",
            },
          ],
        },
       
        ];
       
      
    return ( 
        <div>
        <div>
          <div>
            
          </div>
        </div>
        <div>
           <Menubar model={items} />
        </div>
           
        </div>
        
        
     );
}
 

export default Navbar;