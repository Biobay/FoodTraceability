// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LotRegistry {
    struct Lot {
        uint256 lotId;
        string species;
        string variety;
        uint256 cultivatedArea;
        string plantingDensity;
        uint256 landId;
        string company;
    }

    mapping(uint256 => Lot) public lots;
    uint256 public nextLotId;

    event LotRegistered(
        uint256 indexed lotId,
        string name,
        string species,
        uint256 totalArea,
        string company
    );

    function registerLot(
        uint256 _lotId,
        string memory _species,
        string memory _variety,
        uint256 _cultivatedArea,
        string memory _plantingDensity,
        uint256 _landId,
        string memory _company
    ) external {
        require(lots[_lotId].lotId == 0, "Lot ID already exists");

        Lot memory newLot = Lot({
            lotId: _lotId,
            species: _species,
            variety: _variety,
            cultivatedArea: _cultivatedArea,
            plantingDensity: _plantingDensity,
            landId: _landId,
            company: _company
        });

        lots[_lotId] = newLot;
        nextLotId++;

        emit LotRegistered(_lotId, _species, _variety, _cultivatedArea, _company);
    }

    function getLotDetails(uint256 _lotId)
        external
        view
        returns (
            string memory species,
            string memory variety,
            uint256 cultivatedArea,
            string memory plantingDensity,
            uint256 landId,
            string memory company
        )
    {
        Lot memory lot = lots[_lotId];
        return (
            lot.species,
            lot.variety,
            lot.cultivatedArea,
            lot.plantingDensity,
            lot.landId,
            lot.company
        );
    }
}
