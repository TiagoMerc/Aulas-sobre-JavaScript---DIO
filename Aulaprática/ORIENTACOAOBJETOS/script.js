//Orientação a objetos

class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }
  //Métodos Gets
  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return 'Operação negada';
    }
    this._saldo = this._saldo - valor;

    return this._saldo;
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;

    return this._saldo;
  }
}

//Classe contacorrente
class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = 'corrente';
    this._cartaoCredito = cartaoCredito;
  }

  //Método Getters
  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}

//Conta Poupança
class ContaPoupança extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = 'poupança';
  }
}

//Conta Poupança
class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'universitária';
  }

  sacar(valor) {
    if (valor > 500) {
      return "Operação negada!";
    }
    this._saldo = this._saldo - valor;
  }
}


//CONSOLE DO NAVEGADOR
/*

const minhaConta = new ContaCorrente(1, 234, true)
undefined
minhaConta.saldo
0
minhaConta.depositar(1000)
1000
minhaConta.sacar(500)
500
minhaConta.saldo
minhaConta.sacar(600)
'Operação negada'



*/

/* Console navegador 


const contaPoup = new ContaPoupança(1, 22)
undefined
const contaUni = new ContaUniversitaria(1, 22)
undefined
contaUni.depositar(1000)
1000
contaUni.sacar(550)
'Operação negada!'


*/
