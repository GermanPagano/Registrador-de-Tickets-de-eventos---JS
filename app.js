
class TicketManager {
    constructor(){
        this.eventos = [];
        this.precioBaseDeGanancias = 0
    }
    getEventos(){
        return this.eventos
    }
    agregarEvento(nombre,lugar,precio,capacidad=50, fecha= new Date){
        precio += precio*0.15
        const participantes = []
        const evento_id = this.eventos.length +1
        // se crea el objeto con los datos recibidos para pushearlo al array
        const eventoAgregado = {
            id: evento_id,
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            participantes
        }
        // se pushea el objeto al array de eventos
        this.eventos.push(eventoAgregado)
    }

    agregarUsuario(id_evento, id_usuario, nombre){
        // evaluar que el evento exista
        const evaluarEvento = this.eventos.find((objEvento) => objEvento.id === id_evento)
        if(!evaluarEvento){
            console.log('no existe ese evento')
            return
        }
        const participantes = evaluarEvento.participantes
        const estaRegistrado = participantes.includes(id_usuario)
        const participante = {
            id: id_usuario,
            nombre: nombre
        }
        estaRegistrado ? (console.log('Usuario ya registrado para el evento')):
        ( participantes.push(participante) ,console.log('Usuario agregado'))
        
    }


    ponerEventoEnGira(id_evento,nuevaLocalidad,nuevaFecha){
        const evaluarEvento = this.eventos.find((objEvento) => objEvento.id === id_evento)
        if(!evaluarEvento){
            console.log('no existe ese evento')
            return
        }
        const eventoModificado = {...evaluarEvento}
        eventoModificado.id = this.eventos.length+1
        eventoModificado.lugar= nuevaLocalidad
        eventoModificado.fecha= nuevaFecha
        eventoModificado.participantes=[]

        this.eventos.push(eventoModificado)
        console.log('nuevo evento en gira')
    }

}

// se instancia el manejador
const nuevoEvento = new TicketManager()
//agrego eventos 
nuevoEvento.agregarEvento('lolapalooza','Buenos aires',15000)
nuevoEvento.agregarEvento('bresh','palermo',20000)
nuevoEvento.agregarEvento('pasion de sabado','puente la noria',3000)
// agrego usuarios a los eventos
//lolapalooza
nuevoEvento.agregarUsuario(1, 20, 'limp bizkit')
nuevoEvento.agregarUsuario(1, 4, 'linkin park')
//bresh
nuevoEvento.agregarUsuario(2, 50, 'maria becerra')
nuevoEvento.agregarUsuario(2, 12, 'duki')
//pasion de sabado
nuevoEvento.agregarUsuario(3, 100, 'piola vago')
nuevoEvento.agregarUsuario(3, 1, 'damas gratis')

//se agregan 1 fecha para pasion de sabado
nuevoEvento.ponerEventoEnGira(3,'la matanza',new Date('2024-07-29'))

const eventos = nuevoEvento.getEventos();

eventos.forEach(e =>{
    console.log(`evento: ${e.nombre} en ${e.lugar}`)
    console.log('Participantes:');
    e.participantes.forEach(part => console.log(` - ${part.nombre}`));
})