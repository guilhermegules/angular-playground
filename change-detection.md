## Change Detection

- `ngOnInit`: Component inicializado
- `ngAfterViewInit`: View pronta para manipulação
- `ngOnDestroy`: Componente destruido

### What is it?

- Mecanismo responsável por notar mudanças no estado da nossa aplicação e refletir esse novo estado pro usuário
- Processo executado nas views, começando pelo `AppComponent`
- Unidirecional: rodando de cima pra baixo

### Oque causa mudanças no estado da nossa aplicação?

> Async actions!

- Eventos: click, focus, submit, etc
- HTTP request
- Timers: setTimeout, setInterval

### Zones

- Consiste em executar um pedaço de código dentro de um _wrapper_
- Wrapper sabe quando o código começou e terminou de ser executado
- NgZone

```
ParentComponent -> ChildComponent

Ações do Change detection:
1. Atualiza os binds com o ChildComponent
2. Chama o ngOnInit, ngDoChecks e ngOnChanges
3. Atualiza View atual (ParentComponent)
4. Roda Change detection no ChildComponent
5. Chama o ngAfterViewChecked e ngAfterViewInit
```

### Some Questions

- Em que situação o Angular atualiza uma View durante a execução do change detection?
  - Se um dos valores presentes na estrutura de dados chamada bindings tiver sido atualizado.
- Ao executar change detection em um componente pai:
  - A View de componente filho fica pronta apenas depois de o change detection ser executado nele mesmo.
- Que tipo de ações disparam uma rodada de change detection na aplicação?
  - Assíncronas.
- Qual método do cíclo de vida é executado em toda execução do change detection?
  - ngDoCheck
- O que acontece se um valor for atualizado depois de ter sido verificado?
  - Teremos inconsistência de informação pois o novo valor não foi renderizado na nossa View.
- Quando o change detection é executado em um componente, qual dessas ações acontece?
  - Executa ngAfterViewChecked no componente filho.
- O que significa o erro `ExpressionChangedAfterItHasBeenChecked`?
  - Que o valor foi alterado entre a primeira e segunda verificação, só acontece no modo desenvolvimento.
- Quem guarda a lista de ChangeDetectorRef?
  - ApplicationRef.
- Um pedaço de código assíncrono executado fora de uma Zone:
  - Não dispara change detection.

### ChangeDetectionStrategy.OnPush

Essa estratégia faz com que o Change Detection somente seja acionado quando um Input for modificado
