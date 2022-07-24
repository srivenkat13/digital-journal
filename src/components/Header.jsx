import img from "/Globe.png"


export default function Header() {
    return (
        
    <div className="header">
        <img src={img} alt="logo" />
        <h3>my travel journal.</h3>
    </div>
    )
}