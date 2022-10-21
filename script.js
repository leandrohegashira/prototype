function Cachorro(raca, idade){
  this.raca = raca;
  this.idade = idade;
  this.latir = function(){
    return 'AU AU AU AU'
  }
}

Cachorro.prototype.latir = function(){
  return 'MIAU'
}

const poodle = new Cachorro('poodle', 5)


const Pessoa = {
  nome: 'Leandro',
  idade: 40,
  andar(){
    return 'andou'
  }
}

