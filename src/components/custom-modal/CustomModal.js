import React from "react";

const CustomModal= ({message, children, classes}) => {
    return (
        <>
            <div className={`${classes} position-absolute `}>
                            {message}
                            {children && children}
            </div>
        </>)

}

export default CustomModal;