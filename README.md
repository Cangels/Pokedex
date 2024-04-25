# Projeto Pokédex Angular

## Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Uso](#instalação)
- [Imagens do Site](#home)
- [Contato](#contato)


## Sobre o Projeto

Projeto voltado para exibir uma lista de Pokémons sendo possível visualizar o pokemon selecionado desde o 1 até o 151, e tendo a possibilidade para pesquisar usando o NOME ou ID do pokemon, ou clicando nos botões para mudar pro Pokémon mais próximo, e existe um botão para o detalhe do Pokémon selecionado.


## Tecnologias Utilizadas

-Angular CLI(v17.3.5)
-Node.js (v21.7.3)
-TypeScript
-SCSS
-HTML
-RxJS
-API (PokeAPI)


## Estrutura do Projeto

A aplicação é estruturada da seguinte maneira, facilitando o desenvolvimento e a manutenção:

### Diretórios Principais

#### `src/`
Contém todo o código-fonte da aplicação.

- **`app/`**: Núcleo da aplicação.
  - **`app.component.*`**: Componente raiz da aplicação.
  - **`pokedex/`**:
    - **`pokedex.component.ts/html/scss`**: Componente que gerencia a lógica e a interface da lista de Pokémons.
    - **`interfaces.ts`**: Definições de tipos para as interfaces utilizadas no projeto.

- **`assets/`**: Arquivos estáticos como imagens e ícones.

- **`styles.scss`**: Estilos do body da página.

#### `index.html`
Página principal que carrega a aplicação Angular.

### Configuração

- **`angular.json`**: Configurações para o Angular CLI.
- **`package.json`**: Dependências e scripts para a aplicação.
- **`tsconfig.json`**: Configurações do compilador TypeScript.

### Testes

- **`*.spec.ts`**: Arquivos de teste para os componentes e serviços.


## Instalação

Para instalar e rodar o projeto localmente, siga estas etapas:

```bash

# Clone o repositório
git clone https://github.com/Cangels/Pokedex.git

# Entre no diretório do projeto
cd Pokedex

# Instale as dependências
npm install

# Execute a aplicação
ng serve --open
```
OU
Acesse http://localhost:4200 no seu navegador para ver a aplicação rodando.


##Mudanças Futuras: 
- Farei uma funcionalidade de comparação de Pokémons, aonde ocorrerá uma batalha entre 2 Pokémons selecionados e mostrará qual tem maior Stats.
- Corrigir a responsividade da tela.


### Home
![pokedex](https://github.com/Cangels/Pokedex/assets/116917314/84fb23cb-d652-4200-a5ad-10e36b76088f)

### Detalhes
![pokedex-details](https://github.com/Cangels/Pokedex/assets/116917314/81736afb-0ae8-4654-a80b-1d9c8cacff71)

### Battle (protótipo para a segunda página)
![pokedex-battle](https://github.com/Cangels/Pokedex/assets/116917314/6fbca864-3211-4e8d-b4cc-ebbf41873f3f)


## Contato

João Rafael – [@arcanjo_jao](https://www.instagram.com/arcanjo_jao/) - joaorafaelarcanjo@hotmail.com
Link do Projeto: [https://github.com/Cangels/Pokedex](https://github.com/Cangels/Pokedex).

