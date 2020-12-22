import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset-> {
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className="bg-pink-200 min-h-screen p-12">
      <img
        src={singlePost.mainImage.asset.url}
        alt={singlePost.title}
        className="absolute h-full w-full flex items-center justify-center p-8"
        style={{ height: "400px", width: "550px", justifyItems: "center" }}
      />
      <article className="container shadow-lg mx-auto bg-pink-100 rounded-lg">
        {/* <header className="relative">
          <h1 className="cursive text-3xl lg:text-6xl mb-4">
            {singlePost.title}
          </h1>
        </header>

        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={singlePost.body}
            projectId="2pi6z7vj"
            dataset="production"
          />
        </div> */}
      </article>
    </main>
  );
}
