export default function Botones({
  numeros,
  novaEntrada,
  setNovaEntrada,
  clicar,
  display,
}) {
  const entraNumero = (numero) => {
    if (novaEntrada) clicar(numero);
    else clicar(display * 10 + numero);
    setNovaEntrada(false);
  };

  return (
    <>
      {numeros.map((numero) => {
        return (
          <button className="Boton" onClick={() => entraNumero(numero)}>
            {numero}
          </button>
        );
      })}
    </>
  );
}
