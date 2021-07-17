import React from "react";

class Search extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div class="dropdown mb-4">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Animal Type
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Dog
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Bird
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Reptile
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Rabit
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown mb-4">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Breed Type
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Havanese
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Goldendoodle
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Boxer
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Wheaten Terrier
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Cockatoo
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Horned Lizard
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Shih Tzu
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                American
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Labrador
              </a>
            </li>
          </ul>
        </div>

        <div class="input-group flex-nowrap mb-4">
          <input
            type="text"
            class="form-control"
            placeholder="City Name"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>

        <button type="button" class="btn btn-dark">Submit</button>

      </div>
    );
  }
}

export default Search;
