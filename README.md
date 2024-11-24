# EnergyCacao
## Software para Otimização Energética na Indústria de Beneficiamento do Cacau

Este projeto é um prototipo que simula sensores que podem ser utilizados para 
coletar dados de equipamentos de processo de moagem de nibs de Cacau compostos
por 4 motores. Neste prototipo utilizamos 2 sensores.


### Visão Geral

- Publishers: Desenvolvido em Typescript e bliblioteca MQTT simula determinado
                sensor que envia dados para um Gateway que serão coletados.
- Broker: Gateway no protocolo MQTT fornecido gratuitamente pela HIVEMQ 
                https://www.hivemq.com/  
- Subscriber: Desenvolvido em Typescript resgata as informações do Broker e 
                grava em banco de dados, repassando também para o console.


### Considerações

- O prototipo pode ser configurado para atender diversos sensores e modos de operação
na coleta de dados, como temporização e medições desejadas na simulação, servindo para
teste do Broker e subscriber.

- Por estar utilizando um Broker como HIVEMQ conhecido pelo desempenho, elasticidade e
um balanciamento de carga considerado robusto, a escalabilidade é asegurada, quanto a 
flexibilidade obtemos uma boa otimização, pode-se utilizar outro Broker, diferentes 
sensores e trabalha com diversostipos de dados, o React Native pode ser utilizado em
diversas plataformas.

- O projeto utiliza várias tecnologias modernas e práticas recomendadas no desenvolvimento
de sistemas IoT. A utilização de MQTT, TypeScript, React Native, e um broker escalável como
o HiveMQ cria uma solução capaz de se adaptar e crescer conforme as necessidades.

- Este protótipo para desenvolvimentos iniciais em sistemas IoT segue bem funcional e util. 
A capacidade de publicar e receber dados em tempo real, mais a facilidade de configuração e manutenção, é uma excelente base para futuros desenvolvimentos.


