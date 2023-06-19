import React from 'react'

const Nav = () => {
    const arr = ["Home","About","Services","Works"]
//   My section
    return (
        <div  className='bg-orange-200 pt-4 pl-12 items-center flex pb-3'>
            <div className='font-normal'>
               <h1 className='mr-96'>Asadbek</h1>
            </div>  
            <div className='font-normal pr-10 ml-80'>
                <ul className='flex gap-4'>
                    {arr.map((values)=>{
                        return(
                            <li>{values}</li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <button className='bg-red-500 p-2 rounded-lg text-slate-50 mr-4'>Sing Up</button>
                <button className='bg-stone-500 p-2 rounded-lg text-zinc-300'>Sing In</button>
            </div>
        </div>
  )
}

export default Nav