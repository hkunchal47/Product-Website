import React from "react";
import BlogItem from "../blogItem/BlogItem";

function Blogs() {
  return (
    <section className="container mt-28 text-center md:text-left flex flex-col items-center">
      <h2 className="text-4xl font-bold">Contents Strategies</h2>
      <p className="font-medium mt-2">
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </p>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <BlogItem
          imgSrc="images/blog-1.jpg"
          author="Himanshu Kunchal"
          date="08 Dec 2023"
          title="Increasing Prosperity With Positive Thinking"
        />
        <BlogItem
          imgSrc="images/blog-2.jpg"
          author="Deepanshu Gupta"
          date="03 Jan 2024"
          title="Motivation Is The First Step To Success"
        />
        <BlogItem
          imgSrc="images/blog-3.jpg"
          author="Kritika Goyal"
          date="11 Jan 2024"
          title="Success Steps For Your Personal Or Business"
        />
        <BlogItem
          imgSrc="images/blog-4.jpg"
          author="Manav"
          date="13 Feb 2024"
          title="Business & Personal Growth With Mindfullness"
        />
      </div>

      <button className="primary-button mt-10">View More</button>
    </section>
  );
}

export default Blogs;
