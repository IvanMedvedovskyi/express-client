import React from "react"
import { useParams } from "react-router-dom"
import { useGetPostByIdQuery } from "../../app/services/postsApi"
import Card from "../../components/card"
import GoBack from "../../components/go-back"
import CreateComment from "../../components/create-comment"

export const CurrentPost = () => {
  const params = useParams<{ id: string }>()
  const { data } = useGetPostByIdQuery(params?.id ?? "")

  if (!data) {
    return <h2>Данного поста не существует</h2>
  }

  const {
    author,
    authorId,
    comments,
    content,
    createdAt,
    id,
    likedByUser,
    likes,
  } = data

  return (
    <>
      <GoBack />
      <Card
        cardFor="current-post"
        authorId={authorId}
        name={author.name ?? ""}
        commentsCount={comments.length}
        content={content}
        likesCount={likes.length}
        avatarUrl={author.avatarUrl ?? ""}
        id={id}
        likedByUser={likedByUser}
        createdAt={createdAt}
      />
      <div className="mt-10">
        <CreateComment />
      </div>
      <div className="mt-10">
        {data.comments
          ? data.comments.map(comment => (
              <Card
                cardFor="comment"
                key={comment.id}
                avatarUrl={comment.user.avatarUrl ?? ""}
                content={comment.content}
                name={comment.user.name ?? ""}
                authorId={comment.userId}
                commentId={comment.id}
                id={id}
              />
            ))
          : null}
      </div>
    </>
  )
}
