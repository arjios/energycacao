import mqtt from 'mqtt';

// Configurações do MQTT
const brokerUrl = 'mqtt://broker.hivemq.com:1883';
const topic = 'dados/sensores';

// Conectando ao broker MQTT
const client = mqtt.connect(brokerUrl);

client.on('connect', async () => {
    console.log('Conectado ao broker MQTT');
    console.log('Database inicializado');
    client.subscribe(topic, (err) => {
        if (err) {
            console.error('Erro ao se inscrever no tópico:', err);
        }
    });
});

client.on('message', async (topic, message) => {
    const data = JSON.parse(message.toString());
    console.log(`Mensagem recebida no tópico: ${topic} `);
    console.log(`Mensagem recebida em.......: ${data.timestamp}`);
    console.log(`Temperatura recebida.......: ${data.temperatura}`);
    console.log(`Umidade recebida...........: ${data.umidade}`);
    console.log(`                                         `);
});

client.on('error', (err) => {
    console.error('Erro ao conectar ao broker MQTT:', err);
});
