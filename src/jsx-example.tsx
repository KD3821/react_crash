import {createElement as e, useState} from "react";

function App() {
    const [count, setCount] = useState(0)
    return e('div', {className: 'container'}, [
        e('h1', {className: 'font-bold', key: 1}, `Test JSX ${count}`),
        e('button', {
            className: 'px-4 py-2 border',
            key: 2,
            onClick: ()=> setCount(count +1)
        }, 'click me!')
    ])
}