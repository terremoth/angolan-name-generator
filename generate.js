const names_before = `Dolar
Plufit Victory
Mestr@ Mágica
Sua Excelencia
Djanera
Insurret@
Da Rosa
@ Letrad@
Vem ser famos@
Miúd@
Ativad@
Esmerald@
Fuyame
Doming@s
Tonivald@
Pay Loc@
Baraka
De Muanza
Figura Publica
Star Best
Figurå
Sacapela
Ölïvëïrä
Ausente Sempre
Modo Infinito
Båd
Blend
Åcümüläd@
Kituxi
Edy@
Cara de Anjo
Liberdade
Constantin@
Rei Salazar
@ Mestre de Todos
@ Pacifico
Mamba Jack
Moren@ Sortud@`;

const names_after = `Selestin@
Smoke
Biguliulson
Tafinha Tg
Kissanga
Modo Bumba
Querid@
Medusa
Classic@
Kid King
@ Princes@
Golfin@
@ Mystik@
Kusseka
Cooktail Balanga
Skill Paris King
Mäjor Mustang
Amoros@ Valente
Victory Victory
Canjica de Ouro
Kipaca Mamboma
Cumbe Rapin@
Chef Bakongo
Setas NBA
Sölótchï
Chapelin@
@ Reformad@
Los Compadres
El Dracula
@ Bitinh@
Love Lov
Principiad@ de Eldorado
Peregrin@
Barba de Gato
Galátic@
Ruas das Ruas
Missed King
Djucci Ginga
Mu Disso
Djudja Nganda
Boss Januário
Sänämä
De Marsel@
Black Pausad@
Tonilson
Malungo
Serafim Tchissoca
Coroa Ndombele
@ Mestrad@
@ Hilaria
Destruça Sacrifício
Manda Brazza Kg
Muandumba Deus
Kunzaila Raper
Zulu Matiãs
Martinh@ Reformad@
Labate Animador
dos Sangradores
Chad Patrici@
Rico Bilha
Storrbiny
Prëdëstinäd@
Domingos Dady King
Moi Sés Ouro
Muachissanda
Honrad@ Bill Key
Filh@ de Deus Pai
Lampião Lampião
Malta Académica
Zecas Kelson
Roda Smock
Nagga Ng
De Deus Friend
Mangovo Malta
Oficial da Costeira
Cönqüstädör@
Do Mundinho
Trezentinh@
Estabilidade Evidente
do Kuduro`;


const random_array_item = function(items) {
    return items[Math.floor(Math.random()*items.length)];
};

const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || "";

document.addEventListener('DOMContentLoaded', () => {
    
    const button = document.getElementById('check');
    
    
    button.addEventListener('click', (evt) => {
        
        let user_name = document.getElementById('user_name');

        if (!user_name.checkValidity()) { 
            return user_name.reportValidity();
        } 
         
        const sex = document.getElementById('sex').value; 
        
        const all_names_before = names_before.split("\n");
        const all_names_after = names_after.split("\n"); 
        let infix = random_array_item(all_names_before).replace(/\@/g, sex);
        let name_fixed = capitalize(user_name.value);
        let suffix = random_array_item(all_names_after).replace(/\@/g, sex);
        
        document.querySelector("#my-new-name span").innerHTML = `${infix} ${name_fixed} ${suffix}`;
    });
    
    
});



