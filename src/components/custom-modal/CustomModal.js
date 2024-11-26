import React from "react";

const CustomModal= ({message, children, classes}) => {
    return (
        <>
            <div className={`${classes} position-absolute z-index-5`} >
                            {message}
                            {children && children}
            </div>
        </>)

}

export default CustomModal;