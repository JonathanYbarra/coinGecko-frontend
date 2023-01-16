import '@testing-library/cypress/add-commands';
// cypress/support/index.ts
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-cy attribute.
             * @example cy.dataCy('greeting')
             */
            dataCy(value: string): Chainable<JQuery<HTMLElement>>
        }
    }
}

// cypress/support/index.ts
Cypress.Commands.add('dataCy', (value) => {
    return cy.get(`[data-cy=${value}]`)
})

// cypress/support/index.ts
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to type a few random words into input elements
             * @param count=3
             * @example cy.get('input').typeRandomWords()
             */
            typeRandomWords(
                count?: number,
                options?: Partial<TypeOptions>
            ): Chainable<JQuery<HTMLElement>>
        }
    }
}

interface TypeOptions extends Cypress.TypeOptions {
    sensitive: boolean
  }
  
  Cypress.Commands.overwrite<'type', 'element'>(
    'type',
    (originalFn, element, text, options?: Partial<TypeOptions>) => {
      if (options && options.sensitive) {
        // turn off original log
        options.log = false
        // create our own log with masked message
        Cypress.log({
          $el: element,
          name: 'type',
          message: '*'.repeat(text.length),
        })
      }
  
      return originalFn(element, text, options)
    }
  )