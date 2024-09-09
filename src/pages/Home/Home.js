import React, { useEffect } from 'react'
import styles from './Home.module.css'
//hooks
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
//component
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';


export default function Home() {
  const { user } = useAuthContext();
  const {documents, error} = useCollection(
    'transactions',
    ["uid","==", user.uid],
    ["createdAt", "desc"]
  );

  // Set the document title as a side effect
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Welcome {user.displayName}</h1>
          transaction list
          {error && <p>{error}</p>}
          {documents && <TransactionList transactions = {documents}/>}

          
        </div>
        <div className={styles.sidebar}>
          <TransactionForm uid = {user.uid} />
        </div>
      </div>
  );
}

