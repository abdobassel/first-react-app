

export default function TestImport() {
    const x = 20;
    const Person = {
        name: "BASSEL",
        email: "bebo@gmail.com",
    }

    return (
        <div>
            <h1>
                {Person.email} ---
                {Person.name} ---
                (20 + 100) /2 =
                {(x + 100) / 2} -----

                Import Component As a File</h1>
            <MyBtn />
        </div>
    );
}

const BtnStyle = {
    color: "black",
    backgroundColor: 'red',

    height: 60,
    fontSize: 30,
}
function MyBtn() {

    // style ==> عبارة عن اوبجكت كامل 
    return <button style={BtnStyle}> Button </button>
}
function SayHello() {
    alert('hello from react jsx onClic={functionName}');
}

