import { useEffect, useState } from 'react';
import Card from './context';

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch the latest financial news from the external finance site
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=85e9274cb3b549ffa4409bb12eabaf2f')
      .then(response => response.json())
      .then(data => setNews(data.articles.slice(0, 10)));
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <div>
        <Card
          bgcolor="primary"
          header="Welcome to the All Access Bank"
          body={
            <>
              <p>We are here for your financial future and for all banking needs!</p>
              <div>
                <img src="./bankicon.png" alt="wat" width="100%" />
              </div>
              
            </>
          }
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
        <div>
          <h5>Our Services</h5>
          <ul>
            <li>Checking Accounts</li>
            <li>Savings Accounts</li>
            <li>Loans</li>
            <li>Credit Cards</li>
          </ul>
        </div>
        <div>
          <h5>Customer Testimonials</h5>
          <p>
            "I have been a customer of All Access Bank for many years and am extremely happy with their friendly and
            knowledgeable staff." - Jenny P.
          </p>
          <p>
            "All Access Bank has been a lifesaver for me. Their low-interest rates on loans have helped me to become
            financially free." - Rami D.
          </p>
        </div>
      </div>
      <div style={{ gridColumn: '1 / -1' }}>
        <h5>Financial News</h5>
        <ul>
          {news.map((item, index) => (
            <li key={index}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
