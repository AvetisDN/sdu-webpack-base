let itemName = "Пункт"

const div = document.createElement('div')
div.innerHTML = `
    <ul>
        <li>
            ${itemName} 1
        </li>
        <li>
            ${itemName} 2
        </li>
        <li>
            ${itemName} 3
        </li>
        <li>
            ${itemName} 4
        </li>
    </ul>
`

export default div