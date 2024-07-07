import React, { useRef } from "react";
import "./styles.css";
import robo from "../assets/robo.svg";
import { useState } from "react";
function ImageGenerator() {
  const [imageUrl, setImageUrl] = useState("/");
  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer sk-proj-0SXrUHQW5gt5Alwqtjy0T3BlbkFJvxBd161YyFb2acMg61Gv",
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 1,
          size: "512x512",
        }),
      }
    );
    let data = await response.json();
    console.log(data);
  };
  let inputRef = useRef(null);
  return (
    <div className="generator">
      <div className="header">
        AI Image <span>Generator</span>
      </div>
      <div className="image-loading">
        <div className="image">
          {<img src={imageUrl === "/" ? robo : imageUrl} className="img" />}
        </div>
        <div className="searchbox">
          <input
            type="text"
            ref={inputRef}
            placeholder="Describe The Image"
            className="input-search"
          />
          <div
            className="btn"
            onClick={() => {
              imageGenerator();
            }}
          >
            Generate Image
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGenerator;
