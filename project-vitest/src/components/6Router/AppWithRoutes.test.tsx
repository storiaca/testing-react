import { render, screen } from '@testing-library/react';
import { TextEncoder } from 'util';
import { AppWithRoutes } from './AppWithRoutes';
import { MemoryRouter } from 'react-router';
global.TextEncoder = TextEncoder;

vi.mock('./Routes/Home', () => ({
    Home: () => <div data-testid='HomeMock' />
}))

vi.mock('./Routes/About', () => ({
    About: () => <div data-testid='AboutMock' />
}))

describe('App with routes test suite', ()=>{
  it('should always load the navbar', ()=>{
        
  })

  it('Should initially load the home component', ()=>{
        
  })

  it.skip('Should initially load the home component', ()=>{
       
  })
})