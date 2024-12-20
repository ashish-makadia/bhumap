import Header from "../container/header";


function HomeC(props) {
    console.log(props,"++++++");
    return (
        <>
            <Header />
            <div className="bg-gray">
                <h1>
                    <strong>Home Component</strong>
                </h1>
                    <button>add to cart</button>
            </div>
        </>
    );
}

export default HomeC;
