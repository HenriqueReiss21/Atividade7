class Cliente{
    constructor(nome, telefone, renda, email){
        this.nome = nome, 
        this.telefone = telefone, 
        this.renda = renda, 
        this.email = email
    }

    verificarCredito(){
        const minhaPromise = new Promise((resolve, reject) =>{
            if(this.renda >= 2000){
                resolve(`Crédito Aprovado! Rebda superior a 2000.`)
            } else {
                reject(`Crédito Recusado... Renda menor do que 2000.`)
            }
        })

        minhaPromise.then(
            (resultado) => console.log(resultado)
        ).catch(
            (resultado) => console.log(resultado)
        )

        return minhaPromise
    }
}

const cliente1 = new Cliente("Henrique", "123456789", 2500, "abc@gmail")
cliente1.verificarCredito()
