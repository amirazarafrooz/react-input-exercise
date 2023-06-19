import './label.css'

const Label = ({value}) => {

    return(
        <label class='label'>
        حرفی که زدی اینقدر شد 🗿 : {value.length}
        </label>
    )
}

export default Label