const Ticket = props => {
    return (
        <div>
            <div className="mx-auto w-87">
                <img src={props.image} className="w-80 h-60" />
                <h1 class="relative text-[20px] font-bold text-white">{props.name}</h1>
                <div className="flex flex-row">
                    <h1 class="relative text-[30px] font-bold text-[#F2B34E] -top-2">{props.price}</h1>
                    <h1 class="relative text-[15px] mt-[5px] ml-2 w-80 font-bold text-white line-through">{props.discount}</h1>
                </div>
                <div className="flex flex-row">
                    <img src={props.star} alt="star" className="w-7 relative -top-2"/>
                    <h1 className="text-white font-bold -top-[5px] relative">{props.rating}</h1>
                </div>
            </div>
        </div>
    )
}


export default Ticket