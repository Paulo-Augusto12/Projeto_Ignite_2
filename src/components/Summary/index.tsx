
import entradasimg from "../../Assets/entradas.svg"

import saidasimg from "../../Assets/saidas.svg"

import totalimg from "../../Assets/total.svg"

import { useTransactions } from '../../hooks/useTransactions'

import { Container } from './styles'


export function Summary(){

    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction)=> {

        if (transaction.type === 'deposit'){

            acc.deposits += transaction.amount;
            acc.total += transaction.amount;

        }else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;

    },{
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return(

        <Container>
            
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasimg} alt="entradas" />
                </header>

                <strong> 
                {new Intl.NumberFormat('pt-BR' ,{
            style:'currency',
            currency:'BRL',
            }).format(summary.deposits)}
                    
                </strong>

            </div>
            
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={saidasimg} alt="saida" />
                </header>

                <strong> 
                    -  {new Intl.NumberFormat('pt-BR' ,{
            style:'currency',
            currency:'BRL',
            }).format(summary.withdraws)}
                </strong>

            </div>

            <div className="total">
                <header>
                    <p>Total</p>
                    <img src={totalimg} alt="total" />
                </header>

                <strong>
                {new Intl.NumberFormat('pt-BR' ,{
            style:'currency',
            currency:'BRL',
            }).format(summary.total)}
                </strong>

            </div>

        </Container>
    )



}