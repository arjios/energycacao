import mqtt from 'mqtt';

// Servidor MQTT
const brokerUrl = 'mqtt://broker.hivemq.com:1883'
const topic = 'dados/sensores'
const client = mqtt.connect(brokerUrl)

client.on('connect', async () => {

    // Enviando dados a cada 5 segundos
    setInterval(async () => {
        const data = {
            temperatura: (Math.random() * ((110 - 90) + 90)).toFixed(3),
            umidade: (Math.random() * ( 100 - 5) + 5).toFixed(3),
            timestamp: new Date()
        };
        client.publish(topic, JSON.stringify(data));
        console.log('Dados publicados:', data);
    }, 5000);
});

client.on('error', (err) => {
    console.error('Erro ao conectar ao broker MQTT:', err);
});
