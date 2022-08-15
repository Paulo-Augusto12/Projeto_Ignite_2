import Modal from 'react-modal'
import { Container , TransactionTypeContainer , RadioBox } from './styles'
import closeimg from '../../Assets/Vector.svg'
import incomeimg from '../../Assets/entradas.svg'
import outcomeimg from '../../Assets/saidas.svg'
import { FormEvent, useState  } from 'react'
import { useTransactions } from '../../hooks/useTransactions'


interface NewTransactionModalProps{

    isOpen: boolean;
    onRequestClose:() => void;
}



export function NewTransactionModal ({isOpen , onRequestClose}:NewTransactionModalProps){

    const {createTransaction} = useTransactions();

    const[title, setTitle] = useState (''); 
    const[amount, setAmount] = useState (0);
    const[category, setCategory] = useState('')
    const [type , setType] = useState('deposit');

    async function handleCreateNewTransaction(event:FormEvent){

        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onRequestClose();

    }

    return(

        <Modal 
      isOpen={isOpen} 
      onRequestClose = {onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
        <button type="button" >
            <img src={closeimg} alt="Fechar Modal" onClick={onRequestClose} 
            className="react-modal-close" />
        </button>
                <Container onSubmit={handleCreateNewTransaction} >
                <h2>Cadastrar Transação</h2>
                
                <input 
                placeholder='Titulo'
                value={title}
                onChange={event => setTitle (event.target.value)}
                />
                <input 
                placeholder='Valor'
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}
                />


                <TransactionTypeContainer>

                    <RadioBox
                    type="button"
                    id='outcome-button'
                    onClick={() => {setType('deposit');}}
                    isActive={type === 'deposit'}
                    activeColor="green"
                    
                    >
                        <img src={incomeimg} alt="Entradas Modal" />
                        
                        <span>Entradas</span>

                    </RadioBox>

                    <RadioBox
                    type='button'
                    id='income-button'
                    
                    onClick={() => {setType('withdraw'); }}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                    
                    >
                        <img src={outcomeimg} alt="Saidas Modal" />
                        
                        <span>Saidas</span>

                    </RadioBox>
                    
                </TransactionTypeContainer>


                <input 
                placeholder='Categoria'
                value={category}
                onChange={event => setCategory(event.target.value)}
                />

                <button type='submit'> Cadastrar </button>
                </Container>
                </Modal>


    )

}