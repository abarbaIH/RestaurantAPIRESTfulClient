import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<h1>INICIO</h1>} />
            <Route path='/gallery' element={<h1>GALERIA</h1>} />
            <Route path='/create' element={<h1>CREAR RESTAURANTE</h1>} />
            <Route path='/details/:restaurant_id' element={<h1>DETALLES RESTAURANTE</h1>} />
            <Route path='/signup' element={<h1>REGITRO</h1>} />
            <Route path='/login' element={<h1>INICIO SESION</h1>} />
            <Route path='/profile' element={<h1>PERFIL</h1>} />
            <Route path='*' element={<h1>PERFIL</h1>} />
        </Routes>
    )
}

export default AppRoutes