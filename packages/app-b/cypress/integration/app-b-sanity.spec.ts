describe('app-b', { tags: 'b' }, () => {
  it('passes sanity', { tags: 'b' }, () => {
    cy.visit('/')
    cy.contains('This is app-b.')
  })
})
