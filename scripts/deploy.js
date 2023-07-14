const hre = require("hardhat");

// console.log(hre);

async function main() {
  const currentTimeStampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEARS_IN_SECONDS = 365 * 24 * 60 * 60;
  const unlockedTime = currentTimeStampInSeconds + ONE_YEARS_IN_SECONDS;

  const lockedAmount = hre.ethers.parseEther("1");

  //   console.log(currentTimeStampInSeconds);
  //   console.log(ONE_YEARS_IN_SECONDS);
  //   console.log(unlockedTime);
  //   console.log(lockedAmount);

  // const Lock = await ethers.getContractFactory("Lock");
  const MyTest = await ethers.getContractFactory("MyTest");
  const myTest = await hre.ethers.deployContract("MyTest", [unlockedTime], {
    value: lockedAmount,
  });

  await myTest.waitForDeployment();

  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockedTime} deployed to ${myTest.target}`
  );

  console.log(myTest);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
