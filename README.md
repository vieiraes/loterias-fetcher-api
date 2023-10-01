# Loterias Fetcher API

A Loterias Fetcher API é uma API simples para consultar resultados de loterias. Ela permite capturar resultados de sorteios de diferentes loterias e exportar os resultados em um arquivo de texto.

## Rotas

### Capturar Resultado de Sorteio

Endpoint: `POST /lottery/capture`

Esta rota permite capturar o resultado de um sorteio de loteria específico.

**Parâmetros da Solicitação**:

- `lottery` (string): O nome da loteria (ex: "megasena").
- `lotteryDraw` (string): O número do sorteio desejado.

**Exemplo de Solicitação**:

```json
{
  "lottery": "megasena",
  "lotteryDraw": "2356"
}
```

**Exemplo de Resposta**:

```json
{
  "lottery": "megasena",
  "lotteryDraw": "2356",
  "numbers": "06 15 20 39 41 49"
}
```

### [em desenvolvimento] Exportar Resultados em um Arquivo

Endpoint: `GET /lottery/export`

Esta rota permite exportar os resultados de um intervalo de sorteios de loteria para um arquivo de texto.

**Parâmetros da Solicitação**:

- `lottery` (string): O nome da loteria (ex: "quina").
- `initialDraw` (string): O número do primeiro sorteio no intervalo.
- `finalDraw` (string): O número do último sorteio no intervalo.

**Exemplo de Solicitação**:

```
/lottery/export?lottery=quina&initialDraw=1000&finalDraw=1010
```

## Como Executar

1. Clone este repositório para sua máquina.
2. Instale as dependências com `npm install`.
3. Configure as variáveis de ambiente em um arquivo `.env` (veja o arquivo `.env.example` para referência).
4. Inicie o servidor com `npm start`.

## Dependências

- Express: Framework web para Node.js.
- Axios: Cliente HTTP para fazer solicitações.
- Dotenv: Carregar variáveis de ambiente a partir de um arquivo `.env`.
- Nodemon: Reiniciar automaticamente o servidor durante o desenvolvimento.
- TypeScript: Linguagem de programação.
- Gitmoji-cli: Adicionar emojis aos commits do Git.

## Autor

Bruno Vieira - [vieira.es@gmail.com](mailto:vieira.es@gmail.com)

---

Esta é uma documentação básica para a Loterias Fetcher API. Você pode personalizá-la e expandi-la com informações adicionais, como instruções de instalação, configuração do ambiente de produção, exemplos de solicitações e muito mais, dependendo das necessidades do seu projeto. Certifique-se de manter sua documentação atualizada à medida que o projeto evolui.