// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SurvivalistNFT is ERC721, Ownable {
    uint256 public tokenIds;

    struct Item {
        uint256 dmg;
        string rarity;
    }

    mapping(uint256 => Item) public items;

    constructor() ERC721("SurvivalistItems", "SVI") {}

    function mint() public payable {
        require(msg.value >= 0.001 ether, "Cost 0.001 ETH");

        tokenIds++;
        uint256 id = tokenIds;

        _safeMint(msg.sender, id);

        uint256 rand = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, id))) % 100;

        if(rand > 95) items[id] = Item(50, "Legendary");
        else if(rand > 80) items[id] = Item(30, "Epic");
        else if(rand > 50) items[id] = Item(20, "Rare");
        else items[id] = Item(10, "Common");
    }
}