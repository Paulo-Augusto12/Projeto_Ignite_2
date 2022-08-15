
import {EstiloHeader , HeaderContent } from './styles';

import logoimg from '../../Assets/logo.svg';

interface HeaderProps {

    onOpenNewTransactionModal: () => void

}

export function Header({onOpenNewTransactionModal}: HeaderProps) {


    return(
        <EstiloHeader>
            <HeaderContent>

        <img src={ logoimg } alt="dt-money" />
        
        <button type="button" onClick={onOpenNewTransactionModal}>
            Nova transação
                </button>
        
                </HeaderContent>
        </EstiloHeader>
    )


}