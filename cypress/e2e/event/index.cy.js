describe('이벤트 탭', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('이벤트 탭 방문', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(
      ':nth-child(3) > [data-slot="collapsible"] > .group\\/menu-item > .peer\\/menu-button',
    ).click();
    cy.get('.text-sidebar-foreground > .w-full').click();
    /* ==== End Cypress Studio ==== */
  });
});
