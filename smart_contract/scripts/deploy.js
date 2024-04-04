const hre = require("ethers");

async function main() {
  const CarTransactionHistory = await ethers.getContractFactory("CarTransactionHistory");
  // Start deployment, returning a promise that resolves to a contract object
  const _CarTransactionHistory = await CarTransactionHistory.deploy();
  console.log("CarTransactionHistory address:" + _CarTransactionHistory.address);
  const Carmaintenance = await ethers.getContractFactory("Carmaintenance");
  // Start deployment, returning a promise that resolves to a contract object
  const _Carmaintenance = await Carmaintenance.deploy();
  console.log("Carmaintenance address:" + _Carmaintenance.address);
  const Caraccident = await ethers.getContractFactory("Caraccident");
  // Start deployment, returning a promise that resolves to a contract object
  const _Caraccident = await Caraccident.deploy();
  console.log("Caraccident address:" + _Caraccident.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// CarTransactionHistory address:0x8DD592A57B885E66b6bAB874751e2722285cb0AB
// Carmaintenance address:0xf6568AF39811345ab12301d6b929D7B3cC36c704
// Caraccident address:0xe0336F57A310C11d916e17b2868b18895766997e
