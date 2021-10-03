// import add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
// import global css files
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(<Component {...pageProps} />)
}

export default MyApp
