pragma solidity 0.5.6;

contract PlantShop {
    address[16] public buyers;

    function buy(uint plantId) public returns (uint) {
        require(plantId >= 0 && plantId <= 15);
        buyers[plantId] = msg.sender;
        return plantId;
    }

    // Retrieving the buyers
    function getBuyers() public view returns (address[16] memory) {
        return buyers;
    }
}