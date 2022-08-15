
import { useState } from "react";
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { GlobalStyles } from "./styles/global";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/newtransactionmodal";
import { TransactionsProvider } from "./hooks/useTransactions"

Modal.setAppElement('#root');

export function App() {

  const[ isNewTransactionModalOpen , setIsNewTransactionModalOpen ] = useState(false);

    function handleOpenNewTransactionModal () {

            setIsNewTransactionModalOpen(true);
    }


    function handleCloseNewTransactionModal() {

        setIsNewTransactionModalOpen(false);
    }

  return (
    <TransactionsProvider>
      
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      
      <Dashboard />
     
     <NewTransactionModal
      
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
        />
  
      
      <GlobalStyles />
    
      </TransactionsProvider>
  );
}
