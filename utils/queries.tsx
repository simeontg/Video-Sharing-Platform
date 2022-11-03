export const allPostsQuery = () => {
    const query = `*[_type == "post"] | order(_createdAt desc){
      _id,
       caption,
         video{
          asset->{
            _id,
            url
          }
        },
        userId,
        postedBy->{
          _id,
          userName,
          image
        },
      likes,
      comments[]{
        comment,
        _key,
        postedBy->{
        _id,
        userName,
        image
      },
      }
    }`;
  
    return query;
  };

  export const postDetailQuery = (postId: string | string[]) => {
    const query = `*[_type == "post" && _id == '${postId}']{
      _id,
       caption,
         video{
          asset->{
            _id,
            url
          }
        },
        userId,
      postedBy->{
        _id,
        userName,
        image
      },
       likes,
      comments[]{
        comment,
        _key,
        postedBy->{
          _ref,
        _id,
      },
      }
    }`;
    return query;
  };