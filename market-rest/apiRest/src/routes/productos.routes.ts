import {Router} from 'express'
const router= Router()

import * as productCtrl from './productos.controller'

router.get('/productos', productCtrl.obteniendoProductos)

router.get('/productos/:id',productCtrl.obteniendoProducto)

router.post('/productos', productCtrl.subiendoProductos)

router.delete('/productos/:id', productCtrl.eliminandoProducto)

router.put('/productos/:id',productCtrl.editarProducto)

export default router