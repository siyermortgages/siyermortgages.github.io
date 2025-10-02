// Mortgage Calculator Functionality
document.getElementById('calculator-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const loanAmount = parseFloat(document.getElementById('loan-amount').value);
  const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
  const loanTerm = parseInt(document.getElementById('loan-term').value) * 12;

  const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
  document.getElementById('monthly-payment').textContent = `Estimated Monthly Payment: $${monthlyPayment.toFixed(2)}`;
});
