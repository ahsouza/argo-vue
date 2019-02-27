# argo-vue
Landing Page development with Vue.js

## Dicas

- Usar `scrollOverflow:true` https://github.com/alvarotrigo/vue-fullpage.js#options

# Issues

```
{
  "welcome_screens": [
    {
      "title": "Titulo de bem vindo",
      "properties": {
        "description": "Descrição",
        "button_text": "começar"
      },
      "attachment": {
        "type": "image",
        "href": "https://images.typeform.com/images/4bcd3"
      }
    }
  ],
  "thankyou_screens": [
    {
      "title": "Obrigado por preencher!",
      "attachment": {
        "type": "image",
        "href": "https://images.typeform.com/images/4bcd3"
      }
    }
  ],
  "fields" = [
    {
      "title": "Qual seu nome?",
      "type": "short_text",
      "attachment": {
        "type": "image",
        "href": "https://images.typeform.com/images/4bcd3"
      }
    },
    {
      "title": "Quais tipos de projetos você precisa?",
      "type": "multiple_choice",,
      "attachment": {
        "type": "image",
        "href": "https://images.typeform.com/images/4bcd3"
      },
      "properties": {
        "choices": [
          {
            "label": "Foo"
          },
          {
            "label": "Bar"
          }
        ]
      },
    }
  ]
}
```


## Steps parametrizados

- Opção de exibir ou não as etapas
- Etapas viram numeros sem texto
- Exibir botão de avançar e voltar
- Uma etapa para o `welcome_screens[0]`
- Cada etapa para cada `fields[i]` 
- Uma etapa para o `thankyou_screens[0]`

## Campos personalizados

- De acordo com `type` do objeto `fields[i]`
- Botão de avançar e voltar

Referência https://developer.typeform.com/create/reference/create-form/#forms