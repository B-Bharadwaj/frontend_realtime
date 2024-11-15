function showContent(section) {
    const contentDisplay = document.getElementById('content-display');
    
    let content = '';
    switch (section) {
        case 'problem':
            content = `
                <h3>Problem Statement</h3>
                <p>Increasing Complexity and Sophistication of Cyber Threats: Advanced methods target organizations, evolving faster than traditional defenses.</p>
                <p>Fragmented Security Systems: Existing solutions operate in silos without a unified approach.</p>
                <p>Lack of Proactive Threat Detection and Response: Current systems react only after damage begins.</p>
                <p>Goal: Build an open-source platform to continuously analyze networks, detect vulnerabilities, and provide real-time defense.</p>`;
            break;
        case 'solution':
            content = '<h3>Solution Overview</h3><p>Content for Solution Overview will go here...</p>';
            break;
        case 'tech':
            content = '<h3>Tech Stack</h3><p>Content for Tech Stack will go here...</p>';
            break;
        case 'business':
            content = '<h3>Business Approach</h3><p>Content for Business Approach will go here...</p>';
            break;
        case 'sustainability':
            content = '<h3>Sustainability & Feasibility</h3><p>Content for Sustainability & Feasibility will go here...</p>';
            break;
    }
    
    contentDisplay.innerHTML = content;
    // Function to fetch cybersecurity news and update marquee
async function fetchCyberNews() {
    const apiKey = "9b66394b751c42138452852b31078661";  // Replace with your actual API key
    const apiUrl = `https://newsapi.org/v2/everything?q=cybersecurity&apiKey=${9b66394b751c42138452852b31078661}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.articles) {
            // Extract titles of the top 5 articles and join them with " | "
            const headlines = data.articles.slice(0, 5).map(article => article.title).join(" | ");
            document.getElementById('cyber-news').innerText = headlines;
        } else {
            document.getElementById('cyber-news').innerText = "Failed to load news.";
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        document.getElementById('cyber-news').innerText = "Error loading news.";
    }
}

// Call the function to fetch news on page load
fetchCyberNews();

}
