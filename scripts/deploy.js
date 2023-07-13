const hre = require("hardhat");

// console.log(hre);

async function main() {
  const currentTimeStampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEARS_IN_SECONDS = 365 * 24 * 60 * 60;
  const unlockedTime = currentTimeStampInSeconds + ONE_YEARS_IN_SECONDS;

  const lockedAmount = hre.ethers.parseEther("1");

  console.log(currentTimeStampInSeconds);
  console.log(ONE_YEARS_IN_SECONDS);
  console.log(unlockedTime);
  console.log(lockedAmount);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
