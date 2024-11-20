import mqtt from 'mqtt';

// Servidor MQTT
const brokerUrl = 'mqtt://broker.hivemq.com:1883'
const topic = 'dados/sensores'
const client = mqtt.connect(brokerUrl)

client.on('connect', async () => {

    // Enviando dados a cada 5 segundos
    setInterval(async () => {
        const data = {
            nome: "Motor01",
            medida: (Math.random() * ((110 - 0) + 0)).toFixed(3),
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
