// Komponent funk., bezstanowy;

const Header = () => {
    return<h1>Pierwszy komponent</h1>
}

class Blog extends React.Component {

    state={
        number: 0,   
    }

    render(){
        return (
            <section>
                <h2>Artykuł</h2>
                <p>Lorem ipsum dolor sit</p>
            </section>
        )
    }
}

const App = ()=> {
    return (
        <>
        <Header/>
        <Blog/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
