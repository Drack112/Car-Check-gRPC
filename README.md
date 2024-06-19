<h1 align="center">
    Aluguel de Carros com gRPC
</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodando">Rodando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


<br>

<a id="-projeto"></a>

## 💻 Projeto

O estudo de hoje foi um sistema de aluguel de carro com uma simulação de gateway de pagamento interno, cada serviço como autenticação, leitura de usuário, ordem de compra de veiculo e etc é organizado por um serviço proprio e com seu proprio schema de ProtoBuf, um cenário um pouco exagerado para estudar gRPC ainda mas perfeito para colocar em pratica essa simulação. 

<a id="-rodando"></a>

## Rodando o projeto 🌇

## Requerimentos:

- [NodeJS](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

## ☕ Pequena ajuda

Basta apenas rodar as instancias nos containers e pronto, você tem tudo para subir os micro-serviços:

```bash
docker compose up redis mailhog db --build -V
```

Para você rodar os projetos sem problemas, basta agora entrar nas pastas de `microservices`, instalar as dependências e executar seus devidos ambientes, para facilitar, eu desenvolvi um script que já ajuda a copias os arquivos `proto` e executar em ambiente de desenvolvimento.

Basta rodar:

```bash
yarn dev
```

<a id="-como-contribuir"></a>

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.
