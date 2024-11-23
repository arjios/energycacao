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
                grava em banco de dados, repassando também para a tela.




