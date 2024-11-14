document.getElementById("calcular").addEventListener("click", calcularPrestamo);

function calcularPrestamo() {
    const entrada = document.getElementById("entrada");
    const resultado = document.getElementById("resultado");
    const monto = parseFloat(entrada.value);

    if (isNaN(monto) || monto <= 0) {
        resultado.textContent = "Ingresa un monto válido";
    } else {
        const porcentaje = monto * 0.3;
        resultado.textContent = `El 30% del monto es: $${porcentaje.toFixed(2)}`;
    }
}
