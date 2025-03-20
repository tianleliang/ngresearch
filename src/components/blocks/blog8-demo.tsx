import { Blog8 } from "./blog8"

const demoData = {
  heading: "Research Insights & Success Stories",
  description:
    "Explore the latest research papers, success stories, and insights from our NextGen scholars. Learn about their journey and the impact of their research.",
  posts: [
    {
      id: "post-1",
      title:
        "From High School to Published Research: A Student's Journey",
      summary:
        "Follow the inspiring journey of a NextGen scholar who transformed their high school research project into a published paper in a respected journal.",
      label: "Success Story",
      author: "Dr. Emily Chen",
      published: "15 Mar 2024",
      url: "/blog/student-journey",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop",
      tags: ["Research", "Success Story"],
    },
    {
      id: "post-2",
      title: "The Future of AI in Healthcare: A Student's Perspective",
      summary:
        "An in-depth analysis of artificial intelligence applications in healthcare, written by a NextGen scholar who conducted groundbreaking research in the field.",
      label: "Research Paper",
      author: "Michael Park",
      published: "22 Mar 2024",
      url: "/blog/ai-healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop",
      tags: ["AI", "Healthcare"],
    },
  ],
};

function Blog8Demo() {
  return <Blog8 {...demoData} />;
}

export { Blog8Demo }; 