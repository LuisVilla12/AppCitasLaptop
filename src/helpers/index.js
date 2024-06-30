export const formatearFecha=fecha=>{
  const nuevaFecha= new Date(fecha);
  const opciones={
    hour:'numeric',
    minute:'numeric',
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric',
  }
  return nuevaFecha.toLocaleDateString('es-ES',opciones)
}
