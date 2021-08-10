import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionários/Gerente.js";
import { Diretor } from "./Funcionários/Diretor.js";
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";

const diretor = new Diretor(" Marcos, 10000, 23445599");
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Carlos, 5000, 345654332");
gerente.cadastrarSenha("654321");

const cliente = new Cliente("Carol", 23945854954, "345");

const clienteEstaLogado = SistemaDeAutenticacao.login(cliente, "345");
const estaLogadodiretor = SistemaDeAutenticacao.login(diretor, "123456");
const estaLogadogerente = SistemaDeAutenticacao.login(gerente, "654321");
console.log(estaLogadogerente, estaLogadodiretor, clienteEstaLogado);