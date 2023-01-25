function returnText() {
    let ElectricityRate = document.getElementById("ElectricityRate").value;
    let Hours = document.getElementById("Hours").value;
    let TotalPowerWattage = document.getElementById("TotalPowerWattage").value;
    let EstimatedProfitsPerDay = document.getElementById("EstimatedProfitsPerDay").value;

    // ELECTRICITY RATES
    //const DailyRate = 0.206; /* Daily Electricity Rate */
    //const NightlyRate = 0.147; /* Nightly Electricity Rate */
    //const DailyHours = 17; /* Hours Per Rate 12 x 2 = 24 Hours */
    //const NightlyHours = 7;

    // CALCULATES THE NUMBER OF DAYS IN THE CURRENT MONTH
    const daysInThisMonth = () => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    }

    // CALCULATE KILOWATTS PER HOUR
    const CalculateKilowatts = () => {
        return TotalPowerWattage * Hours / 1000;
    };


    // CALCULATE PROFIT TOTAL
    const ProfitPerGpu = () => {
        return EstimatedProfitsPerDay * 1;
    };

    // CALCULATE TOTAL DAILY COST 1.99364
    const DailyTotalCost = (ElectricityRate) => {
        return (ElectricityRate * CalculateKilowatts(TotalPowerWattage));
    };

    // CALCULATE TOTAL WEEKLY COST
    const WeeklyTotalCost = (ElectricityRate) => {
        return (ElectricityRate * CalculateKilowatts(TotalPowerWattage) * 7);
    };

    // CALCULATE TOTAL MONTHLY COST
    const MonthlyTotalCost = (ElectricityRate) => {
        return (ElectricityRate * CalculateKilowatts(TotalPowerWattage) * daysInThisMonth());
    };

    // CALCULATE TOTAL YEARLY COST
    const YearlyMonthlyTotalCost = (ElectricityRate) => {
        return (ElectricityRate * CalculateKilowatts(TotalPowerWattage) * 365);
    };

    //Costs
    document.getElementById("results-dailycost").innerHTML = '<div class="results-dailycost">' + 'Daily Cost: £' + DailyTotalCost(ElectricityRate).toFixed(2)
    document.getElementById("results-weeklycost").innerHTML = '<div class="results-weeklycost">' + 'Weekly Cost: £' + WeeklyTotalCost(ElectricityRate).toFixed(2)
    document.getElementById("results-monthlycost").innerHTML = '<div class="results-monthlycost">' + 'Monthly Cost: £' + MonthlyTotalCost(ElectricityRate).toFixed(2)
    document.getElementById("results-yearlycost").innerHTML = '<div class="results-yearlycost">' + 'Yearly Cost: £' + YearlyMonthlyTotalCost(ElectricityRate).toFixed(2)

    //Profit
    document.getElementById("results-dailyprofit").innerHTML = '<div class="results-dailyprofit">' + 'Profit Per Day: £' + ProfitPerGpu().toFixed(2)
    document.getElementById("results-weeklyprofit").innerHTML = '<div class="results-weeklyprofit">' + 'Profit Per Week: £' + (ProfitPerGpu() * 7).toFixed(2)
    document.getElementById("results-monthlyprofit").innerHTML = '<div class="results-monthlyprofit">' + 'Profit Per Month: £' + (ProfitPerGpu() * daysInThisMonth()).toFixed(2)
    document.getElementById("results-yearlyprofit").innerHTML = '<div class="results-yearlyprofit">' + 'Profit Per Year: £' + (ProfitPerGpu() * 365).toFixed(2)

    //Profit after bills
    document.getElementById("results-dailyprofit-bills").innerHTML = '<div class="results-dailyprofit-bills">' + 'Profit Per Day after bills: £' + (ProfitPerGpu() - DailyTotalCost(ElectricityRate)).toFixed(2)
    document.getElementById("results-weeklyprofit-bills").innerHTML = '<div class="results-weeklyprofit-bills">' + 'Profit Per Week after bills: £' + ((ProfitPerGpu() * 7) - WeeklyTotalCost(ElectricityRate)).toFixed(2)
    document.getElementById("results-monthlyprofit-bills").innerHTML = '<div class="results-monthlyprofit-bills">' + 'Profit Per Month after bills: £' + (ProfitPerGpu() * daysInThisMonth() - MonthlyTotalCost(ElectricityRate)).toFixed(2)
    document.getElementById("results-yearlyprofit-bills").innerHTML = '<div class="results-yearlyprofit-bills">' + 'Profit Per Year after bills: £' + (ProfitPerGpu() * 365 - (YearlyMonthlyTotalCost(ElectricityRate))).toFixed(2)

}

function removeForm() {
    let element = document.getElementById("form-container");
    element.remove();
  }