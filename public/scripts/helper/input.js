export default function getInputValue(element) {
    const inputType = determineInputType(element);
    
    switch (inputType) {
        case 'text':
            return getTextInputValue(element);
        case 'textarea':
            return getTextInputValue(element);
        case 'number':
            return getNumberInputValue(element);
        default:
            return null;
    }
}

export function determineInputType(element) {
    const tag = element.tagName.toLowerCase();
    
    if (tag === 'textarea') {
        return 'textarea';
    }
    
    return element.getAttribute('type');
}

export function getTextInputValue(element) {
    return element.value;
}

export function getNumberInputValue(element) {
    return Number(element.value);
}