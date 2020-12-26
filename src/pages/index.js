import Layout from '../components/layout/Layout'
import { BlogApi } from '../services/blog'
import BlogBox from '../components/BlogBox'

const renderBlogList = entries =>
entries.map((entry, i) => {
  return (
    <BlogBox
      key={i}
      id={entry.id}
      slug={entry.slug}
      imageUrl={entry.coverImage.imageUrl}
      title={entry.title}
      author={entry.author.name}
      description={entry.ellipsis}
      tags={entry.tags}
    />
  );
});

const  Home = (props) => {
  const {entries} = props;
  return (
    <Layout title='Blog Home'>

        {entries.length > 0 && renderBlogList(entries)}
    
      
      </Layout>
  )
}



export default Home;

export async function getStaticProps() {
  const api = new BlogApi();
  const entries = await api.fetchBlogEntries();
  return { props: { entries } }
}