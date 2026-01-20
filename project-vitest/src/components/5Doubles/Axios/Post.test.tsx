import { Post } from "./Post"
import { render, screen, within, act } from "@testing-library/react"
import axios from 'axios'
import type { Comment } from "./Model";

describe('Post tests with mocks', () => {
  const someUserName = 'Alex';
  const someContent = 'Some content'
  const someId = '123'
  const someComments: Comment[] = [
    {
      content: 'Cool!'
    },
    {
      content: 'Yes!'
    }
  ]

  it('should load received comments', async () => {

  })

  it('should call service to load comments', async () => {
     
  })

  it('Network call throws error', async () => {
      
  })
})