import Head from 'next/head';
import Menu from '../components/Menu';
function Sobre() {

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
         
        </div> 
            ) 
  }
  
  export default Sobre