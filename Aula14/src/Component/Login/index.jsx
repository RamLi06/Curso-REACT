import './login.css'

export default function Login() {
    return (
        <>

            <div id='login'>

                <form>
                    <h1>Login</h1><br />

                    <input type="text" placeholder='Usuario' required/><br />
                    <input type="password" placeholder='Senha' required/><br />

                        <button type="submit">Confirmar</button><br />
                        
                        
                        
                </form>

                <div id='cadastro'>

                <form id='form'>
                    
                    <h1>Cadastro</h1><br /><br />
                    

                    <input type="text" placeholder='Nome' required/><br />
                    <input type="number" placeholder='Telefone' required/><br />
                    <input type="password" placeholder='Telefone' required/><br />
                    <br /><br /><br />
                    <input type = "email" placeholder='Email'required/><br />
                    <input type="number" placeholder='Telefone' required/><br />
                    

                    <button id='butao' type="submit">Cadastrar</button><br />
                        
                        
                        
                </form>

                </div>

            </div>
        </>
    );
}