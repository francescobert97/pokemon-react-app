import { Navigate } from "react-router-dom"


const ProtectedRoute = ({condition, children}) => {
    return (condition? children  : <Navigate to='/' />)
}


export default ProtectedRoute;