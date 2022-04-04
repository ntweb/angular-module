# NgRx

Boilerplate

### Premessa

questo modulo con l'aiuto di Redux DevTools serve
per avere far cambiare l'interfaccia al cambiamento della
timeline di Redux DevTools

### Installazione

Installare il pacchetto `npm install @ngrx/router-store --save`


## Aggiornare app.module.ts
Iserire in questo esatto ordine:

    imports: [
        ...
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            routerState: RouterState.Minimal
        })
        ...
    ]

### Code scaffolding

Installare il pacchetto `npm i @ngrx/schematics -D`

Creare i vari store nei moduli con il seguente comando:
`ng generate @ngrx/schematics:store [cartella modulo]/[nome store] --module [modulo di destinazione].module.ts`

esempio: `ng generate @ngrx/schematics:store login/Login --module login.module.ts`
