function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deduction limits
    const TAX_RATE = 0.15; // Assuming a 15% tax rate
    const NHIF_RATE = 0.025; // Assuming NHIF deduction rate of 2.5%
    const NSSF_RATE = 0.06; // Assuming NSSF deduction rate of 6%
    const NSSF_LIMIT = 20000; // Assuming NSSF deduction limit of 20,000
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate deductions
    let tax = grossSalary * TAX_RATE;
    let nhif = grossSalary * NHIF_RATE;
    let nssf = Math.min(grossSalary * NSSF_RATE, NSSF_LIMIT);
  
    // Calculate net salary
    const netSalary = grossSalary - tax - nhif - nssf;
  
    // Return an object with all calculated values
    return {
      grossSalary: grossSalary,
      tax: tax,
      nhif: nhif,
      nssf: nssf,
      netSalary: netSalary
    };
  }
  
  const basicSalary = 50000; // Example basic salary
  const benefits = 10000; // Example benefits
  
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  console.log("Gross Salary:", salaryDetails.grossSalary);
  console.log("Tax:", salaryDetails.tax);
  console.log("NHIF Deduction:", salaryDetails.nhif);
  console.log("NSSF Deduction:", salaryDetails.nssf);
  console.log("Net Salary:", salaryDetails.netSalary);