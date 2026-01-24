import { SimplePost } from "./SimplePost"
import { render } from "@testing-library/react"

describe('Simpe post snapshot tests',  () => {
  it('inital test', () => {
    const rendered = render(<SimplePost content='Simple contet' user='Alex'/>)
    expect(rendered.asFragment()).toMatchSnapshot()
  })
})