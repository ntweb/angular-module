# NgRx

Boilerplate

### Installazione

Installare il pacchetto `npm install @ngrx/store --save`

Eseguire opzionalmente `ng add @ngrx/store-devtools` se si vuole utilizzare il ReduxDev Tool di Chrome.

Se servono gli effects installare `npm install @ngrx/effects --save`

## Aggiornare app.module.ts
Iserire in questo esatto ordine:

    imports: [
        ...
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
        ...
    ]

### Code scaffolding

Installare il pacchetto `npm i @ngrx/schematics -D`

Creare i vari store nei moduli con il seguente comando:
`ng generate @ngrx/schematics:store [cartella modulo]/[nome store] --module [modulo di destinazione].module.ts`

esempio: `ng generate @ngrx/schematics:store login/Login --module login.module.ts`
