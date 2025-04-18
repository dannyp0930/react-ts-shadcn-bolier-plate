describe('이벤트 탭', () => {
  it('이벤트 탭 방문', function () {
    cy.visit('/');
    cy.get('[href="/event"]').click();
  });
});
