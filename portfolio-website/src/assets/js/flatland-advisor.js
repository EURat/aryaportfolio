document.addEventListener("DOMContentLoaded", () => {
  const adviceOutput = document.getElementById("advice-output");
  const getAdviceButton = document.getElementById("get-advice");

  getAdviceButton.addEventListener("click", () => {
    const businessType = document.getElementById("business-type").value.trim();

    if (!businessType) {
      adviceOutput.textContent = "Please enter a valid business type.";
      return;
    }

    // Example advice logic
    let advice = "";
    switch (businessType.toLowerCase()) {
      case "retail":
        advice = "Focus on customer experience and inventory management.";
        break;
      case "tech":
        advice = "Invest in innovation and build a strong online presence.";
        break;
      case "hospitality":
        advice = "Prioritize customer service and maintain cleanliness.";
        break;
      default:
        advice = "Explore market trends and tailor your strategy accordingly.";
    }

    adviceOutput.textContent = `Advice for ${businessType}: ${advice}`;
  });

  const form = document.getElementById("advisor-form");
  const profitDisplay = document.getElementById("profit");
  const adviceDisplay = document.getElementById("advice");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const revenue = parseFloat(document.getElementById("revenue").value);
    const expenses = parseFloat(document.getElementById("expenses").value);

    if (isNaN(revenue) || isNaN(expenses)) {
      profitDisplay.textContent = "Profit: Invalid input.";
      adviceDisplay.textContent = "Advice: Please enter valid numbers.";
      return;
    }

    const profit = revenue - expenses;
    profitDisplay.textContent = `Profit: $${profit.toFixed(2)}`;

    if (profit > 0) {
      adviceDisplay.textContent = "Advice: Great job! Consider reinvesting your profit for growth.";
    } else if (profit === 0) {
      adviceDisplay.textContent = "Advice: You're breaking even. Look for ways to reduce expenses or increase revenue.";
    } else {
      adviceDisplay.textContent = "Advice: You're running at a loss. Consider cutting costs or finding new revenue streams.";
    }
  });
});