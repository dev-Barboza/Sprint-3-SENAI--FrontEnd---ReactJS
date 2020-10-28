import React from 'react';
import { Container , Form , Button } from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import './index.css';




const Login = () => {
    return (
      <div>
      <Menu />
         <Container className='form-height'>
           
              <Form className='form-signin' >
                  
                  <br/>
                  <h3>Login</h3>
                  <hr/>
                  
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email </Form.Label>
                      <Form.Control type="email"  placeholder="Informe o email" required />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Senha</Form.Label>
                      <Form.Control type="password"  placeholder="Senha"  required/>
                  </Form.Group>
                  <Button variant="primary" type="submit" >
                      Entrar
                  </Button>
                  <br/><br/>
                  <a href='/cadastrar' style={{ marginTop :'30px'}}>Não tenho conta!</a>
              </Form>
          </Container>

            <Container class= "Texto">
            <h1>EduX</h1>
            <h2>Faça Parte Voce também!</h2>
            <h4>Entre agora para usufluir todos os beneficios disponiveis</h4>
            </Container>       
      <Rodape />
      </div>
  )
}

export default Login