## Angular CLI commands

### Some useful commands on Angular CLI

#### For more information [Angular Cli docs](https://cli.angular.io/)

Installing Angular CLI `npm install -g @angular/cli`
Creating project `ng new <project-name>`;
Running project `ng serve`;
We can create this way too: 
- `mkdir <Project_name>`;
- `cd <Project Name>`;
- `ng init`;
- `ng serve`.

<hr>

Creating component `ng generate component <component_name>`;
Creating service `ng generate service <service_name>`;
Creating directive `ng generate directive <directive_name>`;
Creating Pipe `ng generate pipe <pipe_name>`;
Creating Class `ng generate class <class_name>`;
Creating Interface `ng generate interface <interface_name>`;
Creating Enum `ng generate enum <enum_name>`.

<hr>

Show CLI version `ng version`.

<hr>

Linting project `ng lint`;
Unit test `ng test`;
End-to-end `ng e2e`.

<hr>

### Building project dev (some ways to do):
- `ng build --target=development --environment=dev`;
- `ng build --dev --e=dev`;
- `ng build --dev`;
- `ng build`.


### Building project prod (some ways to do):
- `ng build --target-production --environment=prod`;
- `ng build --prod --env=prod`;
- `ng build --prod`,

### Creating project with npx:
- `npx -p @angular/cli ng new <project_name>`

### Creating routing module:
- `ng g m <module_name> --routing`

### Disable analytics
- `ng analytics off`
