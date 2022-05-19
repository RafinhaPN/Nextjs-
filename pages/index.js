import Head from 'next/head';
import Menu from '../components/Menu';
function HomePage() {

   return(
        <div>
            <title>My page title</title>
          <Head>
             <meta charSet="utf-8" />
             <meta name="viewport" content="initial-scale=1.0, width=device-width" />
             <meta name="robots" content="index, follow"  />
             <meta name="description"  content="site..." />
             <meta name="author"  content="Rafael - desenvolvedor"/>
          </Head> 
          <Menu />
          <section className="top">
                 <div className="max-width">
                      <div className="top-content">
                          <div className="text-1">
                             Temos a solução
                          </div>
                          <div className="text-2">
                             o que a sua empresa precisa.
                          </div>
                          <div className="text-3">
                             podemos  ajudar sua empresa!
                          </div>
                          <a href="/contato">Entra em Contato</a>
                      </div>
                  </div>
           </section>
      </div> 
            ) 
  }
  
  export default HomePage