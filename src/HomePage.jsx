import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";

export default function HomePage() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Any?type=single&amount=10"
      );
      const data = await response.json();
      setJokes(data.jokes);
    } catch (error) {
      console.log("Error fetching Jokes:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center  bg-dark min-vh-100  ">
      <div className="container my-4">
        {isLoading ? (
          <div className="text-center">
            <Spinner animation="border" variant="light" />
          </div>
        ) : (
          <div className="px-3 table-responsive">
            <Table striped bordered hover>
              <thead className="text-center">
                <tr>
                  <th>ID</th>
                  <th>Category</th>
                  <th>Joke</th>
                </tr>
              </thead>
              <tbody>
                {jokes.map((joke, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{joke.category}</td>
                    <td>{joke.joke}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
