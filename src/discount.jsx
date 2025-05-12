const Discount = props => {
    console.log(props)
    return (
       <div className="mx-auto">
         <img src={props.image} className="w-80 h-60" />
         <h1 class="relative -top-7 text-[20px] bg-[#393E46] w-80 pl-5 font-bold text-white">{props.name}</h1>
       </div>
    )
}

export default Discount