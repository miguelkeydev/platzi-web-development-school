function cdtProfitability(money, time) {
  let interest;

  switch (time) {
    case 1:
      interest = 0.01;
      break;
    case 2:
      interest = 0.025;
      break;
    case 3:
      interest = 0.04;
      break;
    case 6:
      interest = 0.08;
      break;
    case 12:
      interest = 0.125;
      break;
    case 24:
      interest = 0.15;
      break;
    default:
      return "The amount of time doesn't belong to any CDT periods"
      break;
  }

  const profit = money * interest;
  const finalMoney = money + profit;
  return finalMoney
}