function users(userJson) {
    console.log(userJson);
    const html =`<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Avatar</th>
      </tr>
    </thead>
    <tbody>
    ${userJson.data.map(x=>User(u))}
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    </tbody>
  </table>`;
  return html;
}
function User(user) {
    const user = `
    <tr>
  <th scope="row">1</th>
  <td>Mark</td>
  <td>Otto</td>
  <td>@mdo</td>
</tr>`;
return user;
}