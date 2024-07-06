// app.js

document.addEventListener('DOMContentLoaded', async () => {
    // Connessione a Ganache tramite Web3.js
    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545")); // Assicurati di sostituire con il tuo endpoint Ganache
    const contractAddress = '0x4C521582ceE3cAF33d2beA108d48FeBE25888061'; // Sostituisci con l'indirizzo del tuo contratto su Ganache
    const abi = [ // Sostituisci con l'ABI del tuo contratto Solidity
        {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "companyId",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "vatNumber",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "owner",
                "type": "string"
              }
            ],
            "name": "CompanyRegistered",
            "type": "event"
          },
    ];

    const companyRegistryContract = new web3.eth.Contract(abi, contractAddress);

    // Funzione per ottenere i dati di un'azienda dato l'ID
    async function getCompanyData(companyId) {
        try {
            const companyData = await companyRegistryContract.methods.companies(companyId).call();
            return companyData;
        } catch (error) {
            console.error('Errore durante il recupero dei dati dell\'azienda:', error);
            return null;
        }
    }

    // Funzione per visualizzare i dati di un'azienda nella pagina HTML
    async function displayCompanyData(companyId) {
        const companyData = await getCompanyData(companyId);
        if (companyData) {
            const container = document.getElementById('company-data');
            container.innerHTML = `
                <h3>Dati dell'azienda ${companyData.companyId}</h3>
                <p><strong>Nome:</strong> ${companyData.name}</p>
                <p><strong>P.IVA:</strong> ${companyData.vatNumber}</p>
                <p><strong>Proprietario:</strong> ${companyData.owner}</p>
            `;
        } else {
            console.error('Dati azienda non disponibili');
        }
    }

    // Chiamata iniziale per visualizzare i dati di un'azienda (esempio: azienda con ID 0)
    displayCompanyData(0); // Sostituisci con l'ID dell'azienda che desideri visualizzare inizialmente
});
