import { Github } from '../icons/Github'
import { Twitter } from '../icons/Twitter'
import { Instagram } from '../icons/Instagram'
import { Youtube } from './../icons/Youtube'
import './LinkBio.css'

export function LinkBio() {
    return (                
        <div className="container">
            <img src="https://github.com/IrineuAlmeidaJr.png" alt="Foto de perfil do github" className='avatar'/>
            <h1>Irineu Junior</h1>
            <p className='username'>@irineualmeidajr</p>
            <ul>
                <li>                          
                    <a 
                    href="https://www.youtube.com/user/juniors0565/featured" 
                    target="_blank">    
                        <Youtube width={28} height={28} /> Youtube
                    </a>
                </li>
                <li>                       
                    <a 
                    href="https://www.instagram.com/irineualmeidajr/" 
                    target="_blank">
                        <Instagram width={28} height={28} /> Instagram
                    </a>
                </li>
                <li>
                    <a 
                    href="https://twitter.com/irineualmeidajr" 
                    target="_blank">
                    <Twitter width={28} height={28} /> Twitter
                    </a>
                </li>
                <li>
                    <a 
                    href="https://github.com/IrineuAlmeidaJr" 
                    target="_blank">                        
                    <Github width={28} height={28} /> Github
                    </a>
                </li>
            </ul>

            <footer>
            Feito com ❤️ por <span>IrineuAlmeidaJr</span>
            </footer> 
        </div>           
        
    )
}