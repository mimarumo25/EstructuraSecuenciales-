let v1, v2, v3;
let totalPagar = 0;
let totalVentas = 0;
let SalarioBase = 0;
let com = 0;

SalarioBase = Number(prompt('Ingrese Salario Base'));

v1 = Number(prompt("Por favor Ingresar la venta 1"));

v2 = Number(prompt("Por favor Ingresar la venta 2"));

v3 = Number(prompt("Por favor Ingresar la venta 3"));

totalVentas = v1 + v2 + v3;

com = totalVentas * 0.1;

totalPagar = SalarioBase + com;

alert('El total a pagar para el vendedor: ' + totalPagar);

