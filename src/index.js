const messages = [
    'Gabriel juega dark souls',
    'molly tiene hambre',
    'Nicolas tiene sed',
    'Pipo toca bateria',
    'José hackea tu pc',
    'Migue come pan',
    'Tomas corta grama',
    'Alejandro compra un teclado',
    'David escucha música',
    'Rafa cocina tortilla de patatas',
]

const randomMessage = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMessage }