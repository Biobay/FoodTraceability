// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductRegistry {
    struct Product {
        string productId;
        string productName;
        string processingLocation;
        string batchNumber;
        string productionDate;
        string eventPerformed;
    }

    mapping(string => Product) private products;

    event ProductRegistered(
        string indexed productId,
        string productName,
        string processingLocation,
        string batchNumber,
        string productionDate,
        string eventPerformed
    );

    function registerProduct(
        string memory _productId,
        string memory _productName,
        string memory _processingLocation,
        string memory _batchNumber,
        string memory _productionDate,
        string memory _eventPerformed
    ) public {
        require(bytes(products[_productId].productId).length == 0, "Product already registered");

        products[_productId] = Product({
            productId: _productId,
            productName: _productName,
            processingLocation: _processingLocation,
            batchNumber: _batchNumber,
            productionDate: _productionDate,
            eventPerformed: _eventPerformed
        });

        emit ProductRegistered(_productId, _productName, _processingLocation, _batchNumber, _productionDate, _eventPerformed);
    }

    function getProduct(string memory _productId) public view returns (string memory, string memory, string memory, string memory, string memory, string memory) {
        require(bytes(products[_productId].productId).length != 0, "Product not found");

        Product memory product = products[_productId];
        return (
            product.productId,
            product.productName,
            product.processingLocation,
            product.batchNumber,
            product.productionDate,
            product.eventPerformed
        );
    }
}
