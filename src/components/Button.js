import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class Button extends Component {
    renderButton = color =>
        <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
                {({ language }) => language === 'english' ?
                    'Submit' :
                    'Voorleggen'}
            </LanguageContext.Consumer>
        </button>;
    
    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}


export default Button;