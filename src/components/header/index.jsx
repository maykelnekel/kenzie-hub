import { Link } from "react-router-dom"
import { Header } from "./style"

export default function HeaderFunc () {
    return (
        <div>
            <Header>
                <Link to='/'>
                    <h1>Kenzie Hub</h1>
                </Link>
            </Header>
        </div>
    )
}