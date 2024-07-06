document.addEventListener('DOMContentLoaded', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        console.log('Non è stato rilevato un provider Ethereum. Assicurati di utilizzare MetaMask o un altro provider compatibile.');
        return;
    }

    const web3 = window.web3;

    // Indirizzo del contratto CompanyRegistry deployato su Ganache
    const contractAddress = '0xad63004DE52AE58f0674940fF7f40592c49f8027';

    // ABI del contratto CompanyRegistry
    const abi = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_name",
                    "type": "string"
                },
                {
                    "name": "_vatNumber",
                    "type": "string"
                },
                {
                    "name": "_owner",
                    "type": "string"
                }
            ],
            "name": "registerCompany",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];

    const companyRegistryContract = new web3.eth.Contract(abi, contractAddress);

    const registerCompanyForm = document.getElementById('registerCompanyForm');
    const statusMessage = document.getElementById('status');

    registerCompanyForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const vatNumber = document.getElementById('vatNumber').value;
        const owner = document.getElementById('owner').value;

        try {
            const accounts = await web3.eth.getAccounts();
            const result = await companyRegistryContract.methods.registerCompany(name, vatNumber, owner).send({ from: accounts[0] });
            console.log(result);
            statusMessage.innerHTML = `<p style="color: green;">Azienda registrata con successo!</p>`;
        } catch (error) {
            console.error(error);
            statusMessage.innerHTML = `<p style="color: red;">Errore durante la registrazione dell'azienda.</p>`;
        }
    });
});
