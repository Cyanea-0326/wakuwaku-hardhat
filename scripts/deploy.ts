import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Account balance:", (await deployer.getBalance()).toString());
  console.log("console.log deployer:",deployer);

  const Lock = await ethers.getContractFactory("Nft");
  const lock = await Lock.deploy();

  await lock.deployed();
  console.log("newContract deployed to:", lock.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
