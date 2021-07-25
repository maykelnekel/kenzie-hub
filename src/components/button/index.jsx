import { ElementButton } from "../../components/button/style"

export default function Button ( {children, greenSchema = false, ...rest} ) {
    return(
        <ElementButton greenSchema={greenSchema} type='button' {...rest}>
            {children}
        </ElementButton>
    )

}