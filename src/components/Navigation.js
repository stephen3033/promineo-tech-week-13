import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
        <ul className='nav'>
            <li>
                <button>Link 1</button>
            </li>
            <li>
                <button>Link 2</button>
            </li>
            <li>
                <button>Link 3</button>
            </li>
        </ul>
        );
    }
}