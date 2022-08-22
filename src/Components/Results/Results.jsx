import React from "react";
import { useGlobalContext } from "../Context/Context";

const Results = () => {
  const { results, handleRemoveResult } = useGlobalContext();

  return (
    <div className="results py-5 ">
      {results.map((result, index) => {
        const { title, num_comments, url, points, author } = result;

        return (
          
            <article className="result" key={index}>
              <h4 className="title">{title}</h4>
              <p className="info">
                {points} points by <span>{author} | </span> {num_comments}{" "}
                comments
              </p>
              <div>
                <a
                  href={url}
                  className="read-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  read more
                </a>
                <button
                  className="btn text-danger"
                  onClick={() => handleRemoveResult(index)}
                >
                  remove
                </button>
              </div>
            </article>
        );
      })}
    </div>
  );
};
export default Results;
