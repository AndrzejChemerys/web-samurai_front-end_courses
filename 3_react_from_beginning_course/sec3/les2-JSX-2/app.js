const header = <h1 className="title">Witaj na stronie!</h1>

const classBig = "big"

const handleClick = () => alert("klik!")

const main = (
    <div>
        <h1 onClick={handleClick} className="red">Pierszy Artykuł</h1>
        <p>Lorem impsum</p>
    </div>
)

const text = "stopkaaa";
const largeTxt = "Lorem ipsum dolor sit amet"

const footer = (
    <footer>
        <p className={classBig}>Stopka</p>
    </footer>
)

const app = [header, main, footer]

ReactDOM.render(app, document.getElementById('root'));