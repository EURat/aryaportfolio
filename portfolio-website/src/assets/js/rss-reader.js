document.addEventListener("DOMContentLoaded", () => {
  // Static news data for each category
  const newsData = {
    "uk-news": [
      {
        title: "UK Economy Shows Signs of Recovery",
        description: "The UK economy is showing signs of recovery after a challenging year.",
        url: "#",
      },
      {
        title: "New Policies Announced by the Prime Minister",
        description: "The Prime Minister has announced new policies to boost economic growth.",
        url: "#",
      },
    ],
    "france-news": [
      {
        title: "France Hosts Global Climate Summit",
        description: "World leaders gather in Paris to discuss climate change solutions.",
        url: "#",
      },
      {
        title: "French Cuisine Gains UNESCO Recognition",
        description: "French cuisine has been recognized as a cultural heritage by UNESCO.",
        url: "#",
      },
    ],
    "america-news": [
      {
        title: "Tech Giants Face New Regulations in the US",
        description: "The US government introduces new regulations for tech companies.",
        url: "#",
      },
      {
        title: "NASA Plans New Lunar Mission",
        description: "NASA announces plans for a new mission to the Moon by 2026.",
        url: "#",
      },
    ],
    "bing-news": [
      {
        title: "Global Markets See Positive Trends",
        description: "Stock markets around the world are seeing positive trends this week.",
        url: "#",
      },
      {
        title: "Breakthrough in Renewable Energy Technology",
        description: "Scientists have made a breakthrough in renewable energy technology.",
        url: "#",
      },
    ],
  };

  // Function to display news
  function displayNews(categoryKey, contentId) {
    const contentDiv = document.getElementById(contentId);

    // Toggle visibility of the content
    if (contentDiv.style.display === "block") {
      contentDiv.style.display = "none";
      return;
    }

    contentDiv.style.display = "block"; // Show the content

    // Generate news articles dynamically
    const articles = newsData[categoryKey] || [];
    if (articles.length > 0) {
      contentDiv.innerHTML = articles
        .map(
          (article) => `
          <div class="news-article">
            <h4>${article.title}</h4>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read Full Article</a>
          </div>
        `
        )
        .join("");
    } else {
      contentDiv.innerHTML = "<p>No news articles available for this category.</p>";
    }
  }

  // Attach event listeners to buttons
  document.querySelectorAll(".rss-button").forEach((button) => {
    button.addEventListener("click", () => {
      const categoryKey = button.getAttribute("data-category");
      const contentId = button.getAttribute("data-content-id");
      displayNews(categoryKey, contentId);
    });
  });
});

