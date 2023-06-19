import './input.css'



const Input = ({value, onChange}) => {
    return(
        
        <div class="input">
        <label for="yechizi">یچیزی بگو، حرفی بزن 🙄 : </label>
        <input 
        value ={value}
        onChange ={(e) => {
            onChange(e.target.value)
        }}
        
        type="text" 
        id="yechizi" 
        name="fname"/> 
           </div>
    )

}


export default Input;