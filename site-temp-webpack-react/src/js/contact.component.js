// home.component.js
import React from 'react';
import HelloComponent from './hello.component';
const ContactComponent = ( props ) => {
    return (
        <h1>About Component! <HelloComponent /></h1>
    );
}
export default ContactComponent;