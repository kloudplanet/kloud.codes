import {createClient} from 'contentful';
import moment from 'moment';

export class BlogApi {
    //client: ContentfulClientApi;
  
    constructor() {
      this.client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      });
    }
  
    fetchBlogEntries = async () => {
      return await this.client
        .getEntries({
          content_type: 'blogPost',
          order: '-fields.publishDate'
        })
        .then((entries) => {
          if (entries && entries.items && entries.items.length > 0) {
            const blogPosts = entries.items.map((entry) =>
              this.convertPost(entry)
            )
            return blogPosts
          }
          return []
        })
    }

    fetchBlogById = async (slug) => {
      return await this.client
        .getEntries({
          content_type: 'blogPost',
          'fields.slug': slug
        })
        .then((entry) => {
          if (entry.items.length > 0) {
            const post = this.convertPost(entry.items[0])
            return post
          }
          return []
        })
    }

    convertPost = (rawData) => {
      const rawPost = rawData.fields

      const rawCoverImage = rawPost?.coverImage
        ? rawPost.coverImage[0].fields
        : null
      const rawAuthor = rawPost?.author ? rawPost.author.fields : null
      return {
        id: rawData.sys.id,
        body: rawPost.body,
        ellipsis: rawPost.ellipsis,
        publishDate: moment(rawPost.publishDate).format('DD MMM YYYY'),
        slug: rawPost.slug,
        tags: rawPost.tags,
        title: rawPost.title,
        is_latest: rawPost.latest || false,
        is_featured: rawPost.featured || false,
        coverImage: this.convertImage(rawCoverImage),
        author: this.convertAuthor(rawAuthor)
      }
    }

    convertImage = (rawImage) => {
      if (rawImage) {
        return {
          imageUrl: rawImage?.file?.url?.replace('//', 'http://'), // may need to put null check as well here
          description: rawImage?.description,
          title: rawImage?.title
        }
      }
      return null
    }

      convertAuthor = (rawAuthor) => {
        if (rawAuthor) {
          return {
            name: rawAuthor.name,
          };
        }
        return null;
      };
  }