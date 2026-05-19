import '../componentcss/navbar.css'

function Navbar(){
    return(
        <div className="nav">
            <h3>Menu</h3>
            <ul>
                <li><button>Coffee</button></li>
                <li><button>Tea</button></li>
                <li><button>Pastries</button></li>
            </ul>
        </div>
    )
}

export default Navbar