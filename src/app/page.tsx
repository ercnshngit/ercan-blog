import { BlogPosts } from "./components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Ercan Şahin
      </h1>
      <p className="mb-4">
        {`Experienced Web Developer actively involved in all
stages of web development. Problem-solving is a hobby for
me. When I code, I follow best practices. I enjoy working
with complex ideas, trying to convert them as simply as
possible, and prioritizing maintainable codebases.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
