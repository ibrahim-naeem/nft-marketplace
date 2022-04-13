//SPDX-License-Identifier: MIT
pragma solidity  ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;
    address contractAddress;

    constructor(address marketplaceAddress) ERC721("Metaverse Tokens", "METT"){
        contractAddress = marketplaceAddress;
    }

    function createToken(string memory tokenURI) public returns(uint){
        _tokenId.increment();
        uint256 newItemId = _tokenId.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(contractAddress, true); //this function from ERC721URIStorage.sol
        return newItemId;
    }
}

//What is tokenURI?
// TokenURI. The tokenURI on an NFT is a unique identifier of what the token "looks" like. A URI could be an API call over HTTPS, an IPFS hash, or anything else unique.