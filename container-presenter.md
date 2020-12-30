## Padrão Container vs Presenter

- Separa nossos components entre containers e presenters
- Permite utilizar o change detection a nosso favor
- Separa responsabilidade
- Permite escrever componentes mais facilmente reutilizaveis

### Presenter

- Preocupa-se em como as coisas são mostradas
- Recebe informação do componente via Input
- Emite eventos para o componente pai via Output
- Não guardam estado
- Podem ter presenters e containers dentro deles
- Podem ser mais performáticos com OnPush

### Container

- Preocupa-se em como as coisas funcionam
- Consomem e geram informação de serviços
- Disparam ações com base nos eventos do componente filho
- Tem noção do estado
- Podem ter presenters ou containers dentro deles

### Estrutura

![](./images/container-structure.png)
