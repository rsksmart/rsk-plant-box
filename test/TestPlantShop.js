const PlantShop = artifacts.require("./PlantShop.sol");

const BN = web3.utils.BN;

contract("PlantShop", accounts => {

  let plantShop;

  beforeEach('test', async () => {
    plantShop = await PlantShop.deployed();
  });
  
  it('account can buy a plant', async () => {
    const buyerAccount = accounts[5];
    const expectedPlantId = new BN(8);
    const buyTxInfo = await plantShop.buy(expectedPlantId, {from: buyerAccount});

    assert.equal(buyTxInfo.receipt.status, true, 'buy transaction failed');
  });

  it('remembers buyer account', async () => {
    const buyerAccount = accounts[5];
    const expectedPlantId = new BN(8);
    const returnedAccount = await plantShop.buyers(expectedPlantId);

    assert.equal(returnedAccount, buyerAccount, 'returned buyer account mismatch');
  });

  it('retrieval of all plant owners', async () => {
    const buyerAccount = accounts[5];
    const expectedPlantId = new BN(8);
    const returnedBuyers = await plantShop.getBuyers();

    assert.equal(returnedBuyers[8], buyerAccount, 'buyer of plant 8 mismatch');
  });


});