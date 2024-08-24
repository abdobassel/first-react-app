import { hover } from "@testing-library/user-event/dist/hover"

export default function MyBtn({ title = "Btn" }) {

    // style ==> عبارة عن اوبجكت كامل 
    return <button onClick={SayHello} style={BtnStyle}> {title} </button>
}
const BtnStyle = {
    color: "black",
    margin: 20,
    backgroundColor: 'grey',

    height: 60,
    fontSize: 20,
    border: "teal 4px solid"

}
function SayHello() {
    alert('hello from react jsx onClic={functionName}');
}

