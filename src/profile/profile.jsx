import React from 'react';

export function Profile() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div className="box1">
            <h1>Profile</h1>
        </div>
        <div className="container-s">
            <table className="table table-light">
                <tbody>
                    <tr>
                        <td><label htmlFor="text">Name: </label>
                            <input type="text" id="nameTextfield" name="varText" placeholder="insert name here" required pattern="[Aa].*" onclick= "setName()"/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="text">Username: </label>
                            <input type="text" id="text" name="varText" placeholder="insert username" required pattern="[Aa].*" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="text">Trick Score: 100 </label></td>
                        </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}