import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import GetProductos from "./pages/GetProductos"
import Login from "./pages/Login"
import {Navbar} from "./components/Navbar"
// import Register1 from "./pages/Register1.jsx"
import { Authprovider } from "./context/AuthContext.jsx"
import Register from "./pages/Register.jsx"
import FormProductos from "./pages/FormProductos.jsx"
import UserProfile from "./pages/UserProfile.jsx"
import ProtectedRoute from "./ProtectedRoute.jsx"
import { ProductoProvider } from "./context/ProductoContext.jsx"

function App() {
  return (
   <Authprovider> 
     <ProductoProvider>
      <BrowserRouter>
       <main className="container content-container mx-auto px-10 md:px-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route element={<ProtectedRoute/>}>
            <Route path="/productos" element={<GetProductos/>}/>
            <Route path="/add-producto" element={<FormProductos/>}/>
            <Route path="/producto/:id" element={<FormProductos/>} />
          </Route>
        </Routes>
       </main> 
      </BrowserRouter>
     </ProductoProvider> 
   </Authprovider> 
 )
}

export default App
