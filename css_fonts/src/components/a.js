export function componentA() {
    let ul = document.createElement('ul')
    ul.innerHTML = `
        <li>11</li>
        <li>22</li>
        <li>33</li>
    `
    return ul
}