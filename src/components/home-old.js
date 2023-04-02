import Card from './context';
export default function Home() {

  return (
    <div>
      <Card
      bgcolor="primary"
      header="Welcome to the All Access Bank"
      body={
        <>
          <p>We are here for your financial future and for all banking needs!</p>
          <div>
            <img src='./bankicon.png' alt="wat" width="100%"/>
          </div>

        </>
      }
      />
      <div>
        <h2>Our Services</h2>
        <ul>
          <li>Checking Accounts</li>
          <li>Savings Accounts</li>
          <li>Loans</li>
          <li>Credit Cards</li>
        </ul>
      </div>
      <div>
        <h2>Customer Testimonials</h2>
        <p>"I have been a customer of All Access Bank for many years and am extremely happy with their friendly and knowledgeable staff."</p>
        <p>"All Access Bank has been a lifesaver for me. Their low-interest rates on loans have helped me to become financially free."</p>
      </div>
    </div>
  );
}