describe('사용자자 탭', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('사용자 관리 방문', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(
      ':nth-child(2) > [data-slot="collapsible"] > .group\\/menu-item > .peer\\/menu-button',
    ).click();
    cy.get('.text-sidebar-foreground > .w-full').click();
    /* ==== End Cypress Studio ==== */
  });
});
