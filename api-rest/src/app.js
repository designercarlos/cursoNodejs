import express from 'express';

const app = express();

//Indicar para o express ler body com JSON
app.use(express.json());

//mock = estrutura de dados teste
const selecoes = [
    {id:1, nome: 'Brasil', grupo: 'g'},
    {id:2, nome: 'Suíça', grupo: 'g'},
    {id:3, nome: 'Sérvia', grupo: 'g'},
    {id:4, nome: 'Camarões', grupo: 'g'}
]

//-------------------------------//
//----- FUNCOES AUXILIARES ------//

function buscarSelecaoPorId(id){
    return selecoes.filter( selecao => selecao.id == id);
}

function buscarIndexPorId(id){
    return selecoes.findIndex( selecao => selecao.id == id );
}

//-------------------------------//
//-------- CRIAR ROTAS ----------//

app.get('/', (req, res)=>{
    res.send('Curso de Node.js');
});

app.get('/selecoes', (req, res)=>{
    res.status(200).send(selecoes);// status 200 = sucesso
});

app.post('/selecoes', (req, res)=>{
    selecoes.push(req.body);
    res.status(201).send('Seleção cadastrada com sucesso!')
});

//rota com parâmetro "id"
app.get('/selecoes/:id', (req, res)=>{
    res.json(buscarSelecaoPorId(req.params.id))
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexPorId(req.params.id);
    selecoes.splice(index, 1);
    res.send(`Seleção com id ${req.params.id} excluída com sucesso!`)
})

export default app;