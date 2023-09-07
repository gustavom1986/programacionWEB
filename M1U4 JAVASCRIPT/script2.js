
const nros = [parseInt(prompt('Ingrese el primer número:', '')), parseInt(prompt('Ingrese el segundo número:', '')),parseInt(prompt('Ingrese el tercer número:', '')),parseInt(prompt('Ingrese el cuarto número:', '')),parseInt(prompt('Ingrese el quinto número:', ''))];
document.write("Los números ingresados son:");
document.write("<br>");    
var mayor= nros[0];
for (let index = 0; index < nros.length; index++) {
    const element = nros[index];
    document.writeln(element);
    document.write("<br>");    
    if (nros[index] > mayor) {
        mayor = nros[index];}   
  
}   
document.write("El número mayor es: " + mayor );


