import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class Button extends Component {
    renderButton = color =>
        <button className={`ui button ${color}`}>
            <LanguageContext>
                {value => value === 'english' ?
                    'Submit' :
                    'Voorleggen'}
            </LanguageContext>
        </button>;
    
    render() {
        return (
            <ColorContext>
                {(color) => this.renderButton(color)}
            </ColorContext>
        );
    }
}


export default Button;