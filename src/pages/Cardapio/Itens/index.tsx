import cardapio from './itens.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useEffect, useState } from 'react';
import Ordenador from '../Ordenador';

interface Props{
    busca: string,
    filtro: number | null,
    ordenador: string
}

export default function Itens(props: Props){
    const [lista, setLista] = useState(cardapio);
    const { busca, filtro, ordenador } = props;

    function ordenar(novaLista: typeof cardapio){
        switch(ordenador){
            case 'porcao':
                return novaLista.sort((a,b) => a.size > b.size ? 1 : -1)
            case 'qtd_pessoas':
                return novaLista.sort((a,b) => a.serving > b.serving ? 1 : -1)
            case 'preco':
                return novaLista.sort((a,b) => a.price > b.price ? 1 : -1)
            default: 
                return novaLista;
        }
    }

    function testaBusca(title: string){
        const regex = new RegExp(busca, 'i'); // "i" signfica que a busca vai ser independente de letras maiúsculas ou minúsculas
        return regex.test(title)

    }

    function testaFiltro(id: number){
        if(filtro) return filtro === id;
        return true;
    }

    useEffect(() => {
        const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
        setLista(ordenar(novaLista))
    },[busca, filtro, ordenador]); 
    /*
    useEffect >> Hook utilizado smepre quando algo mudar
    1º parâmetro colocamos oq deve acontecer com o hook useEffect 
    2º parâemtro colocamos oq deve mudar para ativar o hook useEffect
    */
    return(
        <div className={styles.itens}>
            {lista.map(item => (
                <Item 
                {...item}
                key={item.id}
                />
            ))}
        </div>
    )
}

