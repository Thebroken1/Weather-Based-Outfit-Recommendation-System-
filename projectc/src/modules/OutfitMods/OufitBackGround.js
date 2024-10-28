import '../../App.css';
import IconOutfit from './IconOutfit';
import OutfitDetails from './OutfitDetails';
import Rating from './Rating';
function OutfitBackGround(){
    return(
        <div className = "outfitBackGround">
            <div className = "box"><IconOutfit/></div>
            <div className = "box"><OutfitDetails /></div>
            <div className = "box"><Rating /></div>
        </div>
    );
}

export default OutfitBackGround;