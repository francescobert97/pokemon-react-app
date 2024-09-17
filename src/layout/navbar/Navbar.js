import React, { useContext } from "react";
import { MyContext } from "../../context";


const Navbar =() => {
    const { value, setValue } = useContext(MyContext);

   const changeTheme = () => {
        setValue(['bg-dark','text-light'])
   }
    return (
        <div>
            <div>
                <button className="btn" onClick={changeTheme}>Change theme</button>
            </div>
        </div>
    )
}

export default Navbar;