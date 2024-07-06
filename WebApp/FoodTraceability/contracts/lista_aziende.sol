// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract listaziende {
    struct Company {
        string name;
        string vatNumber;
        string owner;
    }

    Company[] public companies;

    function registerCompany(string memory _name, string memory _vatNumber, string memory _owner) public {
        companies.push(Company(_name, _vatNumber, _owner));
    }

    function getRegisteredCompanies() public view returns (Company[] memory) {
        return companies;
    }
}
