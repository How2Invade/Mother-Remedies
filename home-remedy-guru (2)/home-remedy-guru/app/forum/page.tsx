"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CommunityForum() {
  const [posts, setPosts] = useState(initialPosts)
  const [newPost, setNewPost] = useState({ title: '', content: '' })
  const [comments, setComments] = useState<{ [key: number]: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPosts([{ id: posts.length + 1, ...newPost, author: 'You', date: new Date().toLocaleDateString(), likes: 0, comments: [] }, ...posts])
    setNewPost({ title: '', content: '' })
  }

  const handleLike = (id: number) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post))
  }

  const handleComment = (id: number) => {
    if (comments[id]) {
      setPosts(posts.map(post => post.id === id ? { ...post, comments: [...post.comments, { author: 'You', content: comments[id] }] } : post))
      setComments({ ...comments, [id]: '' })
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Community Forum</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Create a New Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Post Title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              required
            />
            <Textarea
              placeholder="Post Content"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              required
            />
            <Button type="submit">Submit Post</Button>
          </form>
        </CardContent>
      </Card>
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.author}`} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>Posted by {post.author} on {post.date}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.content}</p>
              <div className="flex items-center space-x-4 mb-4">
                <Button variant="outline" size="sm" onClick={() => handleLike(post.id)}>
                  👍 {post.likes}
                </Button>
                <Button variant="outline" size="sm">
                  💬 {post.comments.length}
                </Button>
              </div>
              {post.comments.map((comment, index) => (
                <div key={index} className="bg-muted p-2 rounded mb-2">
                  <p className="font-semibold">{comment.author}:</p>
                  <p>{comment.content}</p>
                </div>
              ))}
              <div className="flex space-x-2 mt-4">
                <Input
                  placeholder="Add a comment..."
                  value={comments[post.id] || ''}
                  onChange={(e) => setComments({ ...comments, [post.id]: e.target.value })}
                />
                <Button onClick={() => handleComment(post.id)}>Comment</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const initialPosts = [
  { 
    id: 1, 
    title: "Natural Remedy for Migraines", 
    author: "JohnDoe", 
    date: "2023-05-15", 
    content: "I've found that a combination of lavender essential oil and peppermint tea works wonders for my migraines. Anyone else tried this?",
    likes: 5,
    comments: [
      { author: "JaneSmith", content: "Yes, I've tried this too! It really helps." },
      { author: "MikeJohnson", content: "How much lavender oil do you use?" }
    ]
  },
  { 
    id: 2, 
    title: "Homemade Cough Syrup Recipe", 
    author: "JaneSmith", 
    date: "2023-05-14", 
    content: "Here's my go-to recipe for a natural cough syrup: mix honey, lemon juice, and a pinch of cayenne pepper. It's been really effective for me!",
    likes: 8,
    comments: [
      { author: "JohnDoe", content: "Thanks for sharing! I'll try this next time I have a cough." }
    ]
  },
]

