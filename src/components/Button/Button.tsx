type Props = {
    name: string;
}

export default function Button({name}: Props) {
    let style:string = "calculator-button"
    switch (name) {
        case '0':
            style = style + " calculator-button__0"
            break
        case 'X':
        case '÷':
        case '-':
        case '+':
        case '=':
            style = style + " calculator-button__orange"
            break
        default: 
            break
    }
        
    return (
        <button className={style}>{name}</button>
    )
}