// Menú

let ejercicio = prompt("Que ejercicio quieres probar?: ");

// Ejercicio 4

if (ejercicio == 4){
    while (true){
        let texto = prompt("Porfavor escriba cualquier cosa: ");
        if (texto != ""){
            break
        }
        else{
            let a = 1;
        }
    }
}

// Ejercicio 6

if (ejercicio == 6){
    let numero_1 = prompt("Digite un número: ");
    let numero_2 = prompt("Digite otro número: ");
    let resultado_suma = parseInt(numero_1) + parseInt(numero_2);
    let resultado_resta = parseInt(numero_1) - parseInt(numero_2);
    alert("La suma y resta de " + numero_1 + " y " + numero_2 + " es " + resultado_suma + " y " + resultado_resta + " respectivamente");
}