describe('유저 탭', () => {
  it('유저 탭 방문', function () {
    cy.visit('/');
    cy.get('[href="/user"]').click();
  });
});
