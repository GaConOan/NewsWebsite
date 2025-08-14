function renderArticles(filter = "") {
  const main = document.getElementById("articles");
  main.innerHTML = "";

  Object.entries(newsData).forEach(([category, articles]) => {
    // Lọc theo trang
    if (window.location.pathname.includes("thoi-su.htm") && category !== "Thời sự") return;
    if (window.location.pathname.includes("phap-luat.htm") && category !== "Pháp luật") return;
    if (window.location.pathname.includes("the-gioi.htm") && category !== "Thế giới") return;

    // Tạo section cho từng chuyên mục
    const section = document.createElement("section");
    section.id = category.toLowerCase().replace(/\s+/g, "");

    const h2 = document.createElement("h2");
    h2.textContent = category;
    section.appendChild(h2);

    // Container chứa các card
    const container = document.createElement("div");
    container.classList.add("container");

    articles.forEach(article => {
      if (article.title.toLowerCase().includes(filter.toLowerCase())) {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = article.image;
        img.alt = article.title;
        card.appendChild(img);

        const content = document.createElement("div");
        content.classList.add("card-content");

        const title = document.createElement("h3");
        title.textContent = article.title;
        content.appendChild(title);

        const desc = document.createElement("p");
        desc.textContent = article.description;
        content.appendChild(desc);

        // Click card chuyển trang
        card.addEventListener("click", () => {
          window.location.href = article.url;
        });

        card.appendChild(content);
        container.appendChild(card);
      }
    });

    section.appendChild(container);
    main.appendChild(section);
  });
}

// Tìm kiếm
document.getElementById("searchInput").addEventListener("input", function () {
  const keyword = this.value.trim();
  renderArticles(keyword);
});

renderArticles();
