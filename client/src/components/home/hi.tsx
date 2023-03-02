import React from "react";


interface IHi {
    name: string,
    age: number
}



const Hi_comp = (props: IHi) =>{
    const { name } = props
    const { age } = props

    return (
        <div>
            <div>
                Name: {name}
            </div>
            <div>
                Age: {age}
            </div>
        </div>

    )
}
export default Hi_comp