// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CompanyRegistry {
    struct Company {
        uint companyId;
        string name;
        string vatNumber;
        string owner;
    }

    mapping(uint => Company) public companies;
    uint public nextCompanyId;

    event CompanyRegistered(uint indexed companyId, string name, string vatNumber, string owner);

    function registerCompany(string memory _name, string memory _vatNumber, string memory _owner) public {
        uint companyId = nextCompanyId++;
        companies[companyId] = Company(companyId, _name, _vatNumber, _owner);
        emit CompanyRegistered(companyId, _name, _vatNumber, _owner);
    }
}
