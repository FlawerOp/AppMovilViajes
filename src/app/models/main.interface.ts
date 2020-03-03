export interface MainI{
    titulo: string,
    descripcionCorta:string,
    descripcionLarga:string,
    duracion: string,
    incluye: string,
    no_incluye:string,
    recomendaciones: string,
    imagenes: string
}
export interface ItinerarioI{

    nombre_itinerario,
    grupo_itinerario,
    hotel_itinerario,
    tours_itinerario,
    hora_inicio,
    hora_finalizacion,
    guia_tour,
    conductor_itinerario,
    asesor_itinerario
}