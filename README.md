# Lotofácil Data Fetcher

Este é um script em TypeScript que busca resultados da Lotofácil em uma faixa de concursos especificada e permite exportar os dados para um arquivo.

## Requisitos

- Node.js instalado no seu ambiente.

## Instalação

1. Clone ou faça o download deste repositório para o seu computador.

2. Navegue até a pasta do projeto no terminal.

3. Execute o seguinte comando para instalar as dependências necessárias:

   ```shell
   npm install

Configure suas variáveis de ambiente. Crie um arquivo .env na pasta do projeto e defina a variável TOKEN com seu token de acesso à API.

Exemplo do arquivo .env:

```
TOKEN=suafraesecreta123

```

## Uso

Você pode personalizar o intervalo de concursos que deseja buscar, editando as variáveis concInicial e concFinal no código.


```
let concInicial: number = 1
let concFinal: number = 3

```

Para executar o script, use o seguinte comando:

```
npm start

```


Os resultados serão exibidos no console e, se desejar, você pode exportá-los para um arquivo chamado dados.txt.

## Contribuições

Sinta-se à vontade para contribuir com melhorias neste script. Basta fazer um fork deste repositório, fazer as alterações desejadas e criar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter detalhes.