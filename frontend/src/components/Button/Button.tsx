import type { ButtonProps } from '../../interface';
import './button.css';

const Button_Comp:React.FC<ButtonProps> = (props) => {

    return(
        
        <>
            <a href={`${props.route ? props.route : "#"}`} className={`buttondiv ${props.className}`} style={props.style} onClick={props.onClick}>
                
                {props.text}
            </a>
        </>
    )
}

const Button_Comp_Clr:React.FC<ButtonProps> = (props) => {

    return(
        
        <>
            <a href={`${props.route ? props.route : "#"}`} className={`buttondivclr ${props.className}`} style={props.style} onClick={props.onClick}>
                
                {props.text}
            </a>
        </>
    )
}


export { Button_Comp, Button_Comp_Clr };