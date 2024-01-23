import { Container } from "./styled";
import { Input } from "../../components/input";
import more from "../../assets/more.svg";
import login from "../../assets/login.svg";
import power from "../../assets/power.svg";

export function Home() {
  return (
    <Container>
      <aside>
        <div>
        <h1>Rocketnotes</h1>

     <div id="filterTags">
        <p>Todos</p>
        <p>Frontend</p>
        <p>Node</p>
        <p>React</p>
        </div>
</div>
        <button>
          <img src={more} alt="" />
          Criar nota
        </button>
      </aside>
      <div id="notes">
        <header>
          <div id="profileHeader">
            <img src={login} alt="" />
            <div id="textHeader">
              <p>Bem vindo,</p>

              <h2>Gabriel Ferreira</h2>
            </div>
          </div>
          <button id="power">
            <img src={power} alt="" />
          </button>
        </header>

        <Input title={"Pesquisar pelo título"} />

        <main>
          <h3>Minhas notas</h3>

          <section>
            <div className="Note">
              <a>React Modal</a>

              <div id="tags">
                <div id="tag">React</div>
              </div>
            </div>

            <div className="Note">
              <a>Exemplo de Middleware</a>

              <div id="tags">
                <div id="tag">React</div> <div id="tag">express</div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Container>
  );
}
