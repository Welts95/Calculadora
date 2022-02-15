export default function Botones({ value, clicar }) {
  return (
    <>
      <button onClick={() => clicar(value)} className="Boton">
        {value}
      </button>
    </>
  );
}
