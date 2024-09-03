import React from "react"
import CreatePost from "../../components/create-post"
import { useGetAllPostsQuery } from "../../app/services/postsApi"
import Card from "../../components/card"

export const Posts = () => {
  const { data } = useGetAllPostsQuery()
  return (
    <>
      <div className="mb-10 w-full">
        <CreatePost />
      </div>
      {
        data && data.length > 0 
          ? data.map(({
            content,
            author,
            authorId,
            comments,
            createdAt,
            id,
            likedByUser,
            likes,
          }) => (
            <Card 
              key={id}
              avatarUrl={author.avatarUrl ?? ''}
              content={content}
              name={author.name ?? ""}
              likesCount={likes.length}
              commentsCount={comments.length}
              authorId={authorId}
              id={id}
              likedByUser={likedByUser}
              createdAt={createdAt}
              cardFor="post"
            />
          )) : null
      }
    </>
  )
}