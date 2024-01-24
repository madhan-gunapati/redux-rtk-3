import store from "../../state/store"
import { name_change , font_change } from "../../state/slices/nameSlice"
console.log(store.getState())
const Home = ()=>{
    return <div>
        <p>From Home..</p>
        <button type='button' onClick={()=>{store.dispatch(name_change())} }>Change Name</button>
        <button type='button' onClick={()=>{console.log(store.getState())}}>Show state</button>
    </div>
}

export default Home