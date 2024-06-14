import SignInPage from "../pages/signInPage"

const signinpage = new SignInPage

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    signinpage.accessSigninPage()
    signinpage.successfullyLogin()
  })
})

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    signinpage.accessSigninPage()
    signinpage.failedLogin()
    });
});