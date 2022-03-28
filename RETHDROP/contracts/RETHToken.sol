pragma solidity ^0.8.3;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract RETHToken is ERC20 {
  constructor() ERC20('Realms of ethernity', 'RETH') {
    _mint(msg.sender, 1000000 * 10 ** 18);
  }
}
