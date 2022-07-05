import { Github } from '../icons/Github'
import { Twitter } from '../icons/Twitter'
import { Instagram } from '../icons/Instagram'
import { Youtube } from './../icons/Youtube'
import './LinkBio.css'

export function LinkBio() {
    return (
        <>        
            <div className="container">
                <img src="https://github.com/IrineuAlmeidaJr.png" alt="Foto de perfil do github" />
                <h1>Irineu Junior</h1>
                <p>@irineualmeidajr</p>
                <ul>
                <li>
                    <Youtube width={28} height={28} />   
                    <a 
                    href="https://www.youtube.com/user/juniors0565/featured" 
                    target="_blank">    
                        Youtube
                    </a>
                </li>
                <li>
                    <Instagram width={28} height={28} />
                    <a 
                    href="https://www.instagram.com/irineualmeidajr/" 
                    target="_blank">
                    Instagram
                    </a>
                </li>
                <li>
                    <Twitter width={28} height={28} />
                    <a 
                    href="https://twitter.com/irineualmeidajr" 
                    target="_blank">
                    Twitter
                    </a>
                </li>
                <li>
                    <Github width={28} height={28} />
                    <a 
                    href="https://github.com/IrineuAlmeidaJr" 
                    target="_blank">
                    Github
                    </a>
                </li>
                </ul>

                <footer>
                Feito com 💜 pela <a href="http://www.rocketseat.com.br" target="_blank">Rocketseat</a>
                </footer> 
            </div>           
        </>
    )
}