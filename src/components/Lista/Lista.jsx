import "./Lista.css";

function Lista() {
  const usuarios = [
    {
      nome: "John Doe",
      email: "johndoe@example.com",
    },
    {
      nome: "John Doe",
      email: "johndoe@example.com",
    },
    {
      nome: "John Doe",
      email: "johndoe@example.com",
    },
    {
      nome: "John Doe",
      email: "johndoe@example.com",
    },
    {
      nome: "John Doe",
      email: "johndoe@example.com",
    },
    {
      nome: "John Doe",
      email: "johndoe@example.com",
    },
    {
      nome: "John Doe",
      email: "johndoe@example.com",
    },
    {
      nome: "John Doe",
      email: "johndoe@example.com",
    },
    {
      nome: "John Doe",
      email: "johndoe@example.com",
    },
  ];

  return (
    <>
      <h1>Lista de usuarios</h1>
      <table>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Selecionar</th>
        </tr>
        {usuarios.map((user) => (
          <tr>
            <td>{user.nome}</td>
            <td>{user.email}</td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
        ))}
      </table>
      <button>Selecionar tudo</button>
      <button>Próximo passo</button>
    </>
  );
}

export default Lista;
