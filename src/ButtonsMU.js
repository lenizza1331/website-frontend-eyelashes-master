function ButtonsMU (props){

return (
<div className="cont">
    <button className="change" onClick={()=>props.chosenCategory("guby")}>Губы</button>
    <button className="change" onClick={()=>props.chosenCategory("resnicy")}>Межресничка</button>
    <button className="change" onClick={()=>props.chosenCategory("brovi")}>Брови</button>
</div>
)

}

export default ButtonsMU;