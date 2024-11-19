import mqtt from 'mqtt';

import { initializeDb } from '../database/database';

// Configurações do MQTT
const brokerUrl = 'mqtt://broker.hivemq.com:1883';
const topic = 'dados/sensores';
const client = mqtt.connect(brokerUrl);

client.on('connect', async () => {
    console.log('Conectado ao broker MQTT')
    client.subscribe(topic, (err) => {
        if (err) {
            console.error('Erro ao se inscrever no tópico:', err)
        }
    })
})

client.on('message', async (topic, message) => {
    const data = JSON.parse(message.toString());
    const query = 'INSERT INTO sensor_data (temperatura, umidade, timestamp) VALUES (?, ?, ?)'
    console.log('Inicializando Database...')
    console.log('Database inicializado.')
    console.log(`Mensagem recebida no tópico: ${topic} `);
    console.log(`Mensagem recebida em.......: ${data.timestamp}`);
    console.log(`Temperatura recebida.......: ${data.temperatura}`);
    console.log(`Umidade recebida...........: ${data.umidade}`);
    console.log(`                                         `);
    const db = await initializeDb()
    db.run(query, data.temperatura, data.umidade, data.timestamp),
    console.log('Dados gravados:', data);
});

client.on('error', (err) => {
    console.error('Erro ao conectar ao broker MQTT:', err);
});
