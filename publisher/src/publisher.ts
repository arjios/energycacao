import mqtt from 'mqtt';
import { initializeDb, openDb } from './database';

// Servidor MQTT
const brokerUrl = 'mqtt://broker.hivemq.com:1883';
const topic = 'dados/sensores';
const client = mqtt.connect(brokerUrl);

client.on('connect', async () => {
    console.log('Conectado ao broker MQTT');
    console.log('Inicializando Database...');
    await initializeDb();
    console.log('Database inicializado.');
    const query = 'INSERT INTO sensor_data (temperatura, umidade, timestamp) VALUES (?, ?, ?)'
    // Enviando dados a cada 5 segundos
    setInterval(async () => {
        const data = {
            temperatura: (Math.random() * ((110 - 90) + 90)).toFixed(3),
            umidade: (Math.random() * ( 100 - 5) + 5).toFixed(3),
            timestamp: new Date()
        };
        const db = await openDb();
        await db.run(query, data.temperatura, data.umidade, data.timestamp),
        console.log('Dados gravados:', data);
        client.publish(topic, JSON.stringify(data));
        console.log('Dados publicados:', data);
    }, 5000);
});

client.on('error', (err) => {
    console.error('Erro ao conectar ao broker MQTT:', err);
});
