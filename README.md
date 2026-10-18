# Tsukino Café — 月のカフェ

**Um pequeno refúgio inspirado em Kyoto, pensado para desacelerar.**

O **Tsukino Café** é um conceito de website para uma cafeteria japonesa fictícia, desenvolvido como projeto de portfólio. A proposta foi criar uma experiência digital que transmitisse a mesma sensação de entrar em um café tranquilo: luz suave, detalhes acolhedores e tempo para apreciar as pequenas coisas.

**Design e desenvolvimento:** [Lukas Szewczyk](https://github.com/56mm)

## O conceito

Quis explorar uma direção visual mais delicada, distante de interfaces muito carregadas. A inspiração veio da atmosfera dos pequenos cafés de Kyoto, da estética japonesa contemporânea e da ideia de que um espaço digital também pode transmitir calma.

Em vez de competir pela atenção do visitante com dezenas de elementos, a interface procura criar uma navegação natural, com espaço para as fotografias, os produtos e a identidade do café respirarem.

O objetivo não era apenas apresentar um cardápio, mas construir uma **sensação de lugar**.

## Direção visual e experiência

Algumas escolhas que orientaram o projeto:

- **Paleta quente e discreta:** tons de creme, bege e marrom que remetem ao chá, à madeira e à iluminação natural.
- **Tipografia com personalidade:** combinação de títulos editoriais, textos leves e detalhes em japonês para dar identidade sem prejudicar a leitura.
- **Hierarquia visual clara:** seções bem definidas, conteúdo direto e chamadas para ação sem excesso de destaque.
- **Fotografia como parte da narrativa:** imagens de matcha, doces e ambientes que ajudam a construir a atmosfera imaginada para o café.
- **Movimento sutil:** transições e animações de entrada usadas como complemento da experiência, não como distração.
- **Layout responsivo:** adaptação das seções e dos cards de produtos para telas maiores e dispositivos móveis.

A intenção foi equilibrar **estética, legibilidade e usabilidade**, mantendo a navegação simples do início ao fim.

## O que você encontra no site

| Página | Proposta |
| --- | --- |
| **Home** | Apresentar o conceito, os produtos em destaque e a atmosfera do café. |
| **Menu** | Explorar bebidas e doces por categoria. |
| **About** | Contar a história fictícia e a filosofia visual da marca. |
| **Access** | Contextualizar a inspiração geográfica em Kyoto. |
| **Contact** | Apresentar o responsável pelo projeto e abrir espaço para propostas comerciais. |

## Tecnologias

- **React** — construção da interface em componentes.
- **Vite** — ambiente de desenvolvimento e geração da versão de produção.
- **Tailwind CSS** — estilização responsiva.
- **React Router** — navegação entre páginas.
- **Lucide React** — ícones da interface.

O projeto é estático e não depende de banco de dados ou serviço de reservas.

## Executando localmente

É necessário ter o **Node.js 18 ou superior** instalado.

```bash
npm install --include=dev
npm run dev
```

Para gerar e visualizar a versão de produção:

```bash
npm run build
npm run preview
```

Os endereços locais são informados no terminal. Normalmente, o desenvolvimento utiliza `http://localhost:5173/` e a prévia de produção utiliza `http://localhost:4173/`.

> Em ambientes Linux com limite de monitoramento de arquivos, caso o servidor de desenvolvimento apresente o erro `EMFILE`, utilize `npm run build` e `npm run preview`.

## Sobre o projeto

**Tsukino Café é uma criação conceitual, não um estabelecimento real.** O nome da cafeteria, os produtos, os preços e os horários apresentados são fictícios. O mapa de Kyoto serve apenas como referência de ambientação e não indica uma loja existente. As imagens do café foram geradas para compor a proposta visual.

Este projeto faz parte do portfólio de **Lukas Szewczyk**. Para conversar sobre a aquisição do conceito, licenciamento ou desenvolvimento de um website personalizado, acesse [github.com/56mm](https://github.com/56mm).

## Direitos autorais

© 2026 Lukas Szewczyk. Todos os direitos reservados.

O código original e os elementos autorais deste projeto não são disponibilizados sob uma licença de uso, redistribuição ou exploração comercial por terceiros. Qualquer autorização de uso deve ser solicitada ao autor. Bibliotecas e outros recursos de terceiros permanecem sujeitos às respectivas licenças e condições de uso.
