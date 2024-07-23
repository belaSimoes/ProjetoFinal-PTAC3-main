import { NextResponse } from "next/server";

export const listaDeSeries = [
    {
        id: 1,
        imagem: "https://i.pinimg.com/564x/0b/d5/a1/0bd5a15ff6344eb982d06b9383adee55.jpg",
        nome: "Succession",
        criador: "Jesse Armstrong",
        anoLancamento: 2018,
        genero: "comédia dramática",
        descricao:"Acompanhe a história da família Roy, composta por Logan e seus quatro filhos, que controla um dos maiores conglomerados de meios de comunicação e entretenimento do mundo."
    },
    {
        id: 2,
        imagem: "https://i.pinimg.com/736x/11/54/ec/1154ecda7cf2fe930fe97df022c97361.jpg",
        nome: "The Bear",
        criador: "Christopher Storer",
        anoLancamento: 2022,
        genero: "comédia dramática",
        descricao: "Carmy luta para transformar a lanchonete da família e a si mesmo enquanto trabalha ao lado de uma equipe rude e difícil que acaba se revelando como sua família escolhida."
    },
    {
        id: 3,
        imagem: "https://i.pinimg.com/564x/f5/90/6a/f5906ad7c5a010f8b1adc0292f940e3e.jpg",
        nome: "The Office",
        criador: "Greg Daniels, Ricky Gervais e Stephen Merchant",
        anoLancamento: 2005,
        genero: "comédia",
        descricao:"The Office foi criada com o objetivo de retratar a vida cotidiana dos funcionários de uma empresa americana de papelaria, através de uma mistura de comédia e drama. "
    },
    {
        id: 4,
        imagem: "https://i.pinimg.com/736x/e1/68/9d/e1689dde64ed2180d8b918b1b42eb384.jpg",
        nome: "Sex And The City",
        criador: "Darren Star",
        anoLancamento: 1998,
        genero: "comédia",
        descricao:"A colunista Carrie Bradshaw e as amigas Samantha, Charlotte e Miranda exploram os altos e baixos do mundo dos solteiros em Nova York. Aos trinta e poucos anos de idade, elas são bonitas, bem-sucedidas e, principalmente, unidas por uma grande amizade."
    },
    {
        id: 5,
        imagem: "https://i.pinimg.com/736x/2b/9e/44/2b9e445feeb333390f952c4c6bd68f88.jpg",
        nome: "Gilmore Girls",
        criador: "Amy Sherman-Palladino",
        anoLancamento: 2000,
        genero: "comédia",
        descricao: "Em uma pequena cidade que mistura sonhadores, artistas e pessoas comuns, este drama multigeracional sobre família e amizade gira em torno da relação de Lorelai Gilmore e sua filha, Rory."
    },
    {
        id: 6,
        imagem: "https://i.pinimg.com/564x/c7/b9/80/c7b980732c150bec1ae477b742a58fd8.jpg",
        nome: "Gossip Girl",
        criador: "Josh Schwartz e Stephanie Savage",
        anoLancamento: 2007,
        genero: "comédia",
        descricao: "O colegial acabou para os privilegiados ex-estudantes de uma escola preparatória exclusiva do Upper East Side de Manhattan, mas a Gossip Girl ainda compartilha mensagens de texto sobre escândalos e corações partidos."
    }
    
];

export async function GET(){
    return NextResponse.json(listaDeSeries)
}