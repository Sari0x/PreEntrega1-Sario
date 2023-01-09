let monto = parseFloat(prompt("¿Cuánto dinero necesitas?"));
let meses = parseInt(prompt("¿En cuántos meses querés cancelarlo?"));
let tipo = prompt("¿Para qué necesitas el dinero? (personal, adelanto de haberes, hipoteca, otros)").toLowerCase();
let tasa = 0;

if (tipo === "personal") {
  tasa = 0.05;
} else if (tipo === "adelanto de haberes") {
  tasa = 0.03;
} else if (tipo === "hipoteca") {
  tasa = 0.07;
} else {
  tasa = 0.1;
}

let intereses = monto * tasa * meses;
let pagoTotal = monto + intereses;
let pagoMensual = pagoTotal / meses;

alert(`Con una tasa del ${tasa * 100}%, el pago total sería de ${pagoTotal} y por mes debés abonar ${pagoMensual}.`);

let deseaPagarAnticipado = prompt("¿Querés pagar anticipadamente alguna cantidad de dinero? (s/n)").toLowerCase();

if (deseaPagarAnticipado === "s") {
  let montoAnticipado = parseFloat(prompt("¿Cuánto dinero querés pagar anticipadamente?"));
  if (montoAnticipado > pagoMensual) {
    console.log("El monto a pagar anticipadamente no puede superar al pago mensual.");
  } else {
    for (let i = 1; i <= meses; i++) {
      pagoTotal = pagoTotal - montoAnticipado;
      console.log(`Pago mensual ${i}: ${pagoTotal} (pago anticipado de ${montoAnticipado})`);
    }
  }
} else {
  let pago = pagoTotal;
  while (pago > 0) {
    pago = pago - pagoMensual;
    console.log(`Pago mensual: ${pagoMensual} (saldo restante: ${pago})`);
  }
  console.log("¡Felicidades,ya pagaste tu préstamo!");
}
