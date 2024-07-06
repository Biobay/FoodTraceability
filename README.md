Come installare progetto FoodTraceability

Guida per Configurare il Progetto foodTraceability

1. Installazione delle Dipendenze

Prima di tutto, assicurati di avere Node.js installato sul tuo sistema. Puoi scaricarlo dal sito ufficiale: nodejs.org.

	•	Installazione di Web3.js, Ganache e Truffle:
Apri il terminale e esegui i seguenti comandi per installare globalmente Web3.js, Ganache CLI e Truffle:

npm install -g web3
npm install -g ganache-cli
npm install -g truffle

2. Configurazione di MetaMask

MetaMask è un’estensione del browser che ti permette di interagire con blockchain Ethereum. Assicurati di averlo installato nel tuo browser preferito (come Chrome o Firefox).

	•	Configurazione di MetaMask:
	1.	Installa MetaMask dal sito ufficiale: metamask.io.
	2.	Importa un account utilizzando la chiave privata fornita da Ganache.
	3.	Connetti MetaMask alla rete di sviluppo utilizzando l’URL RPC http://127.0.0.1:7545 e l’ID della catena 1337.

3. Preparazione dell’Ambiente di Sviluppo

	•	Installazione di un IDE:
Puoi utilizzare qualsiasi IDE di tua preferenza per sviluppare il progetto. Un esempio è Visual Studio Code, che è molto popolare e supporta molte estensioni utili per lo sviluppo JavaScript e Solidity.

4. Avvio di Ganache

Ganache fornisce un ambiente blockchain locale per lo sviluppo e il testing di contratti intelligenti. Assicurati che Ganache sia avviato e in esecuzione sulla tua macchina.

5. Compilazione e Migrazione dei Contratti con Truffle

•	Compila i Contratti:
Nel terminale, naviga nella cartella del tuo progetto e esegui il comando per compilare i contratti con Truffle:

truffle compile

•	Migra i Contratti:
Esegui il comando per migrare i contratti sulla blockchain locale fornita da Ganache:

truffle migrate --network development

Se hai già migrato i contratti in precedenza e vuoi resettare la migrazione:

truffle migrate --reset --network development

. Fine

Se hai seguito correttamente tutti i passaggi e tutto funziona come previsto, dovresti essere in grado di visualizzare tutte le transazioni e i contratti deployati su Ganache!
