require('dotenv').config()
import axios from 'axios'
import fs from 'fs'

function criaArray(): string[] {
    let concInicial: number = 1
    let concFinal: number = 100
    let arrayConcursos: string[] = []
    for (let index: number = concInicial; index <= concFinal; index++) {
        arrayConcursos.push(index.toString())
    }
    return arrayConcursos
}
let arrayConcurso: string[] = criaArray()


export async function mountUrl(concursoNumber: string) {
    const loteria: string = "lotofacil"
    const url: string = `https://apiloterias.com.br/app/resultado?loteria=${loteria}&token=${process.env.TOKEN}&concurso=${concursoNumber}`
    return url
}

export async function fetchData(route: string): Promise<string> {
    try {
        const res = await axios.get(route)
        return res.data.dezenas.toString()
    } catch (error) {
        console.log(error)
        throw error
    }
}
function gravaNoArquivo(data: string) {
    const filename = 'dados.txt'
    try {
        fs.writeFileSync(filename, data, 'utf-8')
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}


export async function run() {
    let arrayMatriz: string[] = []
    for (const concurso of arrayConcurso) {
        const url = await mountUrl(concurso);
        try {
            const result = await fetchData(url)
            arrayMatriz.push(result)
            console.log(result)
        } catch (error) {
            console.error('Erro:', error);
        }
    }
    return arrayMatriz
}

// run().then((arrayMatriz) => {
//     console.log(arrayMatriz);
//     const resultado = gravaNoArquivo(arrayMatriz.join('\n'))
//     if (resultado) {
//         console.log('Dados gravados com sucesso.');
//     } else {
//         console.error('Erro ao gravar os dados.');
//     }
// })