import Item from "./Item"
import manta1 from '../../assets/img/manta1.png'
import manta2 from '../../assets/img/manta2.png'
import manta3 from '../../assets/img/manta3.png'
import manta4 from '../../assets/img/manta4.png'
import manta5 from '../../assets/img/manta5.png'
function ItemListContainer(){
    return(
        <div>
            <div>
                <h1>MANTAS</h1>
            </div>
            <div className="ItemListContainer">
                <Item 
                title="Manta AZUL" 
                imgurl={manta1}
                price={1000}/>

                <Item 
                title="Manta MAGENTA"
                imgurl={manta2}
                price={1000}/>

                <Item 
                title="Manta GREY" 
                imgurl={manta3}
                price={1000}/>

                <Item 
                title="Manta BONE" 
                imgurl={manta4}
                price={1000}/>
                
                <Item 
                title="Manta BEIGE" 
                imgurl={manta5}
                price={1000}/>
            </div>
        </div>
    )
}

export default ItemListContainer