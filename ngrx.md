## NgRx State Management

![](./images/state-management-lifecycle.png)

### Some Articles

[NgRx — Best Practices for Enterprise Angular Applications](https://wesleygrimes.com/angular/2018/05/30/ngrx-best-practices-for-enterprise-angular-applications)

[NgRx Docs](https://ngrx.io/)

NgRx Questions:

- "Um Effect pode \_\_\_".
  - Ser executado sem ser como resposta a uma action disparada.
- Qual das seguintes afirmações não é um ponto positivo sobre a utilização de seletores?
  - Seletores não são custosos já que trabalham com Memoization.
  - Seletores são uma forma fácil de ouvir a modificações de um pedaço da Store.
  - Conseguimos combinar seletores para introduzir alguma lógica selecionar porções da Store.
  - Seletores nos possibilitam interceptar novas actions disparadas para selecionar um novo pedaço da Store. (Correta)
- Para que serve o Reducer do NgRx?
  - Para calcular o novo estado com base no estado atual e a Action disparada.
- Ao atualizar o ListService para conter os métodos que servem como interface entre as chamadas HTTP e os componentes, qual se torna a responsabilidade dos componentes?
  - Disparar um comando para o ListService e ouvir as mudanças que esse comando gerou.
- Para que serve um serviço Angular
  - compartilhar informação
- Qual das afirmações é verdadeira sobre compartilhar estado criando uma interface utilizando Observables?
  - Possibilita os componentes a ouvir à modificações e reagir a elas. (Correta)
  - Dificulta a forma como componentes se comunicam já que eles precisam usar Input e Output novamente.
  - O estado dentro do serviço torna-se imutável.
  - Faz com que os componentes precisem usar ChangeDetectionStrategy.OnPush.
