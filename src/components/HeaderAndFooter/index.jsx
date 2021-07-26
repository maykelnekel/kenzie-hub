import { FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Header } from "./style"
import { Footer } from "./style"

export default function HeaderAndFooter () {
    return (
        <div>
            <Header>
                <Link to='/'>
                    <h1>Kenzie Hub</h1>
                </Link>
            </Header>
            <Footer>
                <p>Projeto realizado por Maykel F. M. Nekel</p>
                <div>
                <FaLinkedin/>
                <a href="https://www.linkedin.com/in/maykelnekel/">linked/in/maykelnekel/</a>
                <link rel="stylesheet" href="https://www.linkedin.com/in/maykelnekel/"/>
                </div>
                
            </Footer>
        </div>
    )
}