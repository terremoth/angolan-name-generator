

const names_before = `Dolar
Plufit Victory
Mestr@ Mágica
Sua Excelencia
Vem ser famos@
@ Mestre de Todos
Mamba Jack`;

const names_after = `Selestin@
Smoke
Biguliulson
Tafinha
Kissanga
Querid@
Medusa
Classic@
@ Princes@
Golfin@
@ Mystik@
Amoros@ Valente
Victory Victory
Setas NBA
@ Reformad@
El Dracula
Peregrin@
Boss
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
        
        document.querySelector("#my-new-name span").innerHTML = random_array_item(all_names_before).replace(/\@/g, sex) + ' ' + capitalize(user_name.value) + ' ' + random_array_item(all_names_after).replace(/\@/g, sex);
    });
    
    
});



