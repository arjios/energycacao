import mqtt from 'mqtt';

// Servidor MQTT
const brokerUrl = 'mqtt://broker.hivemq.com:1883'
const topic = 'dados/moagem'
const client = mqtt.connect(brokerUrl)
const max = 100
const min = 0

client.on('connect', async () => {

    // Enviando dados a cada 5 segundos
    setInterval(async () => {
        const data = {
            topico: topic,
            nome: "FluxoNibsTemp",
            medida: Math.floor(Math.random() * ((max - min) + min)),
            unidade: "C",
            timestamp: new Date()
        };
        client.publish(topic, JSON.stringify(data));
        console.log('Dados publicados:', data);
    }, 5000);
});

client.on('error', (err) => {
    console.error('Erro ao conectar ao broker MQTT:', err);
});
