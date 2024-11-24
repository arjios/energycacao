import mqtt from 'mqtt';

import { initializeDb } from '../database/database';

// Configurações do MQTT
const brokerUrl = 'mqtt://broker.hivemq.com:1883';
const topic = 'dados/moagem';
const client = mqtt.connect(brokerUrl);

// Banco de dados
const query = 'INSERT INTO sensor_data (topico, nome, medida, unidade, timestamp) VALUES (?, ?, ?, ?, ?)'

// Conecta ao Broker
client.on('connect', async () => {
    console.log('Conectado ao broker MQTT')
    client.subscribe(topic, (err) => {
        if (err) {
            console.error('Erro ao se inscrever no tópico:', err)
        }
    })
})

// Resgata dados do Broker do topico dado
client.on('message', async (topic, message) => {
    const data = JSON.parse(message.toString());
    const db = await initializeDb()
    db.run(query, data.topico, data.nome, data.medida, data.unidade, data.timestamp),
    console.log('Dados gravados:', data);
    console.log(`Mensagem recebida no tópico: ${topic}`);
    console.log(`Equipamento................: ${data.nome}`);
    console.log(`Temperatura recebida.......: ${data.medida} ${data.unidade}`);
    console.log(`Mensagem recebida em.......: ${data.timestamp}`);
    console.log(`                                         `);


});

client.on('error', (err) => {
    console.error('Erro ao conectar ao broker MQTT:', err);
});
