import SignUpPage from "../pages/signUpPage"
import SignInPage from "../pages/signInPage"
import UserData from "../fixtures/userData.json"


const signinPage = new SignInPage()
const signupPage = new SignUpPage()

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    signinPage.accessSigninPage()
    signinPage.clickSignUp()
    signupPage.successSignup()
    signupPage.confirmsuccessSignup()
  });
});

describe('Tentar registrar um novo usuário sem nome', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    signinPage.accessSigninPage()
    signinPage.clickSignUp()
    signupPage.failSignupFirstName()
  });
});

describe('Tentar registrar um novo usuário sem sobrenome', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    signinPage.accessSigninPage()
    signinPage.clickSignUp()
    signupPage.failSignupLastName()
  });
});

describe('Tentar registrar um novo usuário sem username', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    signinPage.accessSigninPage()
    signinPage.clickSignUp()
    signupPage.failSignupUsername()
  });
});

describe('Tentar registrar um novo usuário sem senha', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    signinPage.accessSigninPage()
    signinPage.clickSignUp()
    signupPage.failSignupPassword()
  });
});


describe('Tentar registrar um novo usuário sem confirmaçao de senha', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    signinPage.accessSigninPage()
    signinPage.clickSignUp()
    signupPage.failSignupPasswordConfirm()
  });
});

