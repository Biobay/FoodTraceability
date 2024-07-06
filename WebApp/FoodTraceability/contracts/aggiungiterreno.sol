// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandRegistry {
    struct Land {
        uint landId;
        string name;
        string addressLocation;
        uint totalArea;
        string company;
        string additionalInfo;
    }

    mapping(uint => Land) public lands;
    uint public nextLandId;

    event LandRegistered(uint indexed landId, string name, string addressLocation, uint totalArea, string company, string additionalInfo);

    function registerLand(string memory _name, string memory _addressLocation, uint _totalArea, string memory _company, string memory _additionalInfo) public {
        uint landId = nextLandId++;
        lands[landId] = Land(landId, _name, _addressLocation, _totalArea, _company, _additionalInfo);
        emit LandRegistered(landId, _name, _addressLocation, _totalArea, _company, _additionalInfo);
    }

    function getLandDetails(uint _landId) public view returns (string memory name, string memory addressLocation, uint totalArea, string memory company, string memory additionalInfo) {
        Land storage land = lands[_landId];
        return (land.name, land.addressLocation, land.totalArea, land.company, land.additionalInfo);
    }
}
