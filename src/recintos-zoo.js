class RecintosZoo {

    analisaRecintos(animal, quantidade) {

        var resultado = new Object();
        resultado.erro = "";
        resultado.sucesso = "";

        if (quantidade < 1) {
            console.log( "Quantidade inválida")
            resultado.erro = "Quantidade inválida";
            return resultado;
        }
            
             
        var tamanho_animal = this.consultaTamanhoAnimal(animal);
        if (tamanho_animal === -1){
            console.log( "Animal inválido")
            resultado.erro = "Animal inválido";
            return resultado;
        }
            
       
        var nro_bioma_animal = this.consultaNroBioma(animal, quantidade);
        if (nro_bioma_animal.length === 0){
            console.log( "Não há recinto viável")
            resultado.erro = "Não há recinto viável";
            return resultado;
        }
            

            resultado.recintosViaveis = [];

        for (let i = 0; i < nro_bioma_animal.length; i++) {
            let nome_bioma = this.consultaNomeBioma(nro_bioma_animal[i]);
            let tamanho_total_bioma = this.consultaTamanhoTotalBioma(nro_bioma_animal[i]);
            let espaco_livre_bioma = this.consultaEspacoLivreBioma(nro_bioma_animal[i]);
            
            var espaco_necessario = tamanho_animal * quantidade;

            //AQUI VERIFICA DIFERENTE ESPECIES
            if (animal === "MACACO" && nro_bioma_animal[i] === 3) {
                espaco_necessario++;
            } else if (animal === "GAZELA" && nro_bioma_animal[i] === 1) {
                espaco_necessario++;
            } else if (animal === "HIPOPOTAMO" && nro_bioma_animal[i] === 3) {
                espaco_necessario++;
            }

            if (espaco_necessario <= espaco_livre_bioma) {
                resultado.recintosViaveis.push(nome_bioma + " (espaço livre: " + (espaco_livre_bioma - espaco_necessario)  + " total: " + tamanho_total_bioma + ")");
            }
        }

        if (resultado.recintosViaveis.length === 0) {
            console.log("Não há recinto viável");
            resultado.erro = "Não há recinto viável";
            resultado.recintosViaveis = null;
            return resultado;
        }          

        console.log(resultado.recintosViaveis);
        return resultado;
    }

    consultaTamanhoAnimal(animal) {
        if (animal === "LEAO") return 3;
        else if (animal === "LEOPARDO") return 2;
        else if (animal === "MACACO") return 1;
        else if (animal === "CROCODILO") return 3;
        else if (animal === "HIPOPOTAMO") return 4;
        else if (animal === "GAZELA") return 2;
        else return -1;
    }

    consultaNroBioma(animal, quantidade) {
        if (animal === "LEAO") return [5];
        else if (animal === "LEOPARDO") return []; //LEOPARDO RETORA NULO POR QUE NÃO EXISTE BIOMA DISPONIVEL PARA ELE
        else if (animal === "CROCODILO") return [4];
        else if (animal === "GAZELA") return [1, 3];
        else if (animal === "HIPOPOTAMO") return [3, 4];
        else if (animal === "MACACO") {
            if (quantidade > 1) return [1, 2, 3];
            else return [1, 3];
        }
        return [];
    }

    consultaNomeBioma(nroBioma) {
        if (nroBioma === 1 || nroBioma === 5) return "Recinto 1";
        else if (nroBioma === 2) return "Recinto 2";
        else if (nroBioma === 3) return "Recinto 3";
        else if (nroBioma === 4) return "Recinto 4";
        else if (nroBioma === 5) return "Recinto 5";
        return "Bioma desconhecido";
    }

    consultaTamanhoTotalBioma(nroBioma) {
        if (nroBioma === 1) return 10;
        else if (nroBioma === 2) return 5;
        else if (nroBioma === 3) return 7;
        else if (nroBioma === 4) return 8;
        else if (nroBioma === 5) return 9;
        return 0;
    }

    consultaEspacoLivreBioma(nroBioma) {
        if (nroBioma === 1) return 7;
        else if (nroBioma === 2) return 5;
        else if (nroBioma === 3) return 5;
        else if (nroBioma === 4) return 8;
        else if (nroBioma === 5) return 6;
        return 0;
    }
}

export { RecintosZoo };