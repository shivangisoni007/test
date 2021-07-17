import React from "react";

class List extends React.Component {
  state = {
      petDetails: [
        {
          "id": 1,
          "name": "Luna",
          "animal": "dog",
          "city": "Seattle",
          "breed": "Havanese"
        },
        {
          "id": 2,
          "name": "Bunnahabhain",
          "animal": "dog",
          "city": "Minneapolis",
          "breed": "Goldendoodle"
        },
        {
          "id": 3,
          "name": "Olive",
          "animal": "dog",
          "city": "Minneapolis",
          "breed": "Boxer"
        },
        {
          "id": 4,
          "name": "Sudo",
          "animal": "dog",
          "city": "Denver",
          "breed": "Wheaten Terrier"
        },
        {
          "id": 5,
          "name": "Beam",
          "animal": "dog",
          "city": "Denver",
          "breed": "Wheaten Terrier"
        },
        {
          "id": 6,
          "name": "Gizela",
          "animal": "bird",
          "city": "Carol Stream",
          "breed": "Cockatoo"
        },
        {
          "id": 7,
          "name": "Laughton",
          "animal": "reptile",
          "city": "Bridgeport",
          "breed": "Horned Lizard"
        },
        {
          "id": 8,
          "name": "Si",
          "animal": "dog",
          "city": "Charlotte",
          "breed": "Shih Tzu"
        },
        {
          "id": 9,
          "name": "Lyda",
          "animal": "rabbit",
          "city": "Springfield",
          "breed": "American"
        },
        {
          "id": 10,
          "name": "Jackquelin",
          "animal": "dog",
          "city": "Tucson",
          "breed": "Labrador"
        }
      ]
  };

  render() {
    return (
      <div>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Pet Name</th>
              <th scope="col">Animal Type</th>
              <th scope="col">Breed</th>
            </tr>
          </thead>
          <tbody>
              {this.state.petDetails.map((e) => {
                  return(
                    <tr>
                    <th scope="row">{e.id}</th>
                    <td>{e.name}</td>
                    <td>{e.animal}</td>
                    <td>{e.breed}</td>
                  </tr>
  
                  )
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
