import { useContext } from 'react';
import { Store } from './store';
import Card from './context';

export default function Balance() {
  const { state } = useContext(Store);

  return (
    <>
      <h3>CHECK BALANCE</h3>
      <Card
        bgcolor="secondary"
        body={
          <>
            {state.currentUser && (
              <div>
                <div className="mb-3">
                  <div className="row">
                    <div className="col">Balance: </div>
                    <div className="col" data-testid="user-balance">
                      {state.currentUser.balance}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {!state.currentUser && (
              <div>You can't see this content without being logged in.</div>
            )}
          </>
        }
      />
    </>
  );
}