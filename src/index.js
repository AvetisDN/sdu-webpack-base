import txt from './content'
import block from './block'
import './styles/style.scss'

const root = document.getElementById('root')

const h1 = document.createElement('h1')
h1.textContent = txt
h1.classList.add('heading-1')



root.append(h1, block)
