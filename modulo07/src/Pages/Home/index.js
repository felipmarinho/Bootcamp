import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-flex-2018-rn-masculino/26/D12-9471-026/D12-9471-026_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$179,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-flex-2018-rn-masculino/26/D12-9471-026/D12-9471-026_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$179,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-flex-2018-rn-masculino/26/D12-9471-026/D12-9471-026_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$179,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-flex-2018-rn-masculino/26/D12-9471-026/D12-9471-026_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$179,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-flex-2018-rn-masculino/26/D12-9471-026/D12-9471-026_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$179,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-flex-2018-rn-masculino/26/D12-9471-026/D12-9471-026_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$179,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
