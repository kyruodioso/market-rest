import {RequestHandler} from 'express'
import Productos from './Productos'

export const subiendoProductos: RequestHandler =async(req,res)=>{
    const producto= new Productos(req.body)
    const productoGuardado= await producto.save()
    res.json(productoGuardado)
}
export const obteniendoProductos: RequestHandler =async(req,res)=>{
  try {
    const productos = await Productos.find()
    return res.json(productos)
  } catch (error) {
      res.json(error)
  }
}
export const obteniendoProducto: RequestHandler =async(req,res)=>{
const producto= await Productos.findById(req.params.id)
if(!producto) return res.status(204).json()
return res.json(producto)
}
export const eliminandoProducto: RequestHandler =async(req,res)=>{
    const producto= await Productos.findByIdAndDelete(req.params.id)
if(!producto) return res.status(204).json()
return res.json(producto)
}
export const editarProducto: RequestHandler =async(req,res)=>{
  const productoActualizado= await Productos.findByIdAndUpdate(req.params.id, req.body, {new:true})
  if(!productoActualizado) return res.status(204).json()
  return res.json(productoActualizado)
}