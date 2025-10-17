const names_before = `Dolar
Plufit Victory
Mestr@ Mágica
Sua Excelencia
Djanera
Föx
Insurret@
Abacatí
Da Rosa
Mä Nü Ël@
Benisvaud@
Mïùd@
Le Brune
Dos Populares
Laur@ Infinit@
Tempestady
Tuneca
@ Letrad@
Variante Carinhos@
Vem ser famos@
Miúd@
Charlotte
Muid@ Mimad@ Boss
Ndimbex
Ho Figura
Dericleni@
Ativad@
Esmerald@
Kotok@
Tchumaca
Fuyame
Doming@s
Tonivald@
Dos Mestres
Landils@m
Celestin@
Reservad@
Estrelas de Càcüacu
Pay Loc@
Dikizeco
Baraka
De Muanza
Figura Publica
Imaculad@
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
Kapot@ Brahyony
Classic@
Kid King
@ Princes@
Golfin@
@ Mystik@
Kusseka
Chick Negrinh@
Cooktail Balanga
Skill Paris King
Mäjor Mustang
Amoros@ Valente
Tribäl Nêÿ
Victory Victory
Canjica de Ouro
Kipaca Mamboma
Cumbe Rapin@
Piedade Kapingala
Chef Bakongo
De Bunga Canganjo
Setas NBA
@ Pitang@
Sölótchï
Polian@ Vibes
Chapelin@
Amarula dos Gucci
@ Reformad@
Los Compadres
El Dracula
@ Bitinh@
Love Lov
Mödö Böss
Bazuka
Ëlöngö Tërësä
Principiad@ de Eldorado
Peregrin@
Barba de Gato
Galátic@
Ruas das Ruas
dos Pändä
@ Pacat@
Missed King
Djucci Ginga
Tchissanga Zerinh@
Mu Disso
Camatanga Mimosa
Djudja Nganda
Boss Januário
Mimad@ Wazekwa
Bältåzär
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
Benguela Cheezy
Macuanha Beloumy
Bunga Basi
Ngonga Quiluange
Malueca
Muheto Pint@
Manda Brazza Kg
Muandumba Deus
Kunzaila Raper
Zulu Matiãs
Ziloy Pausadinh@
Martinh@ Reformad@
Labate Animador
dos Sangradores
@ Tal Bloqueirinh@
Da Djamba
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
Boss Adão
Teuma Quingueixem
Wandajoi Benza
Jämba Perdid@
Nguimbi Domingos
Mangovo Malta
de Fëvërëïrö
@ Tal Blindad@
Oficial da Costeira
Benza Wacanda
Cönqüstädör@
Do Mundinho
Trezentinh@
Estabilidade Evidente
do Kuduro`;


const random_array_item = function(items) {
    return rando(items).value;
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




