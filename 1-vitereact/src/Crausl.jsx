import React, { useState } from 'react'

const Crausl = () => {

    const [index, setIndex] = useState(0)
    const handelNext = () => {
        if (index < newArr.length-1) {
            setIndex((prev) => prev + 1)
        }

    }
    const handelPrevious = () => {
        if(index>0){
            setIndex((prev)=> prev - 1 )
        }
     }

    const newArr = ["https://media.istockphoto.com/id/2189919590/photo/large-group-of-pets-sitting-and-standing-in-front-of-white-background.jpg?s=2048x2048&w=is&k=20&c=ecT2JCsPb7yVfBW8z_erUDU3u5nWMy8wtVborVmaLBg=", "https://media.istockphoto.com/id/1681997497/photo/group-of-pets-leaning-together-on-a-empty-web-banner-to-place-text-cats-dogs-rabbit-ferret.jpg?s=2048x2048&w=is&k=20&c=bDDW5Z_bgPvWNYW5FEJ7MLz-PRc-C4se1dyHgInI4lg=", "https://media.istockphoto.com/id/483559025/photo/group-of-pets-dog-cat-bird-reptile-rodent-ferret-fish.jpg?s=2048x2048&w=is&k=20&c=tzeoQcMybIyBuNdcO3etyTX0OcSNOMmVxTqaCUrb3Js=", "https://media.istockphoto.com/id/118550926/photo/group-of-pets-standing-against-white-background.jpg?s=2048x2048&w=is&k=20&c=z6CjgPHx_tStfLtONRI6jkDKklXXa--1uoNvT7GeQhU="]
    return (
        <div className='w-full  min-h-screen flex flex-col  items-center justify-center bg-blue-950'>
            <div className='h-72 w-96  bg-amber-200 rounded-lg ' >
                <img src={newArr[index]} alt="" className="w-full h-full object-cover " />
            </div>
            <div className='w-96 pt-10 flex items-center justify-between'>
               {index!=0 &&   <button onClick={handelPrevious} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">previous</button>}
               
                {index!=newArr.length-1 && <button onClick={handelNext} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">next</button>}
            </div>
        </div>

    )
}

export default Crausl