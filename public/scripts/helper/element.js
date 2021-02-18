export default function createElement(elementConfig) {
    // returns an element that is represented by the element config
    /*
        {
            tag: 'div',
            attributes: [
                {
                    name: 'class',
                    value: 'container'
                }
            ],
            textContent: 'Lorem...'
        }
    */
   
    const element = document.createElement(elementConfig.tag);
    element.textContent = elementConfig.textContent;
    
    elementConfig.attributes.forEach(attribute => {
        element.setAttribute(attribute.name, attribute.value);
    });
    
    return element;
}
