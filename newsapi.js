const express = require('express');
const app = express();
const newsAPI = require('news-api');

app.get('/daily-info', async (req, res) => {
  try {
    const news = await newsAPI.getDailyNews();
    const weather = await weatherAPI.getDailyWeather(); 

    // Format the information as HTML
    const html = `
      <h1>Today's News</h1>
      <ul>
        ${news.map((item) => `<li>${item.title}</li>`).join('')}
      </ul>
      <h1>Today's Weather</h1>
      <p>${weather.temperature} &#8451;</p>
    `;

    res.write(html);
    res.end();
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving daily information');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});