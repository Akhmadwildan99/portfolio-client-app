import { render, screen } from '@testing-library/react'
import Articles from '../Articles'

describe('Articles', () => {
  test('renders articles heading', () => {
    render(<Articles />)
    expect(screen.getByText('Articles')).toBeInTheDocument()
  })

  test('renders article titles', () => {
    render(<Articles />)
    expect(screen.getByText(/State Management di React Vite Berdasarkan Proyek Pokemon-App/)).toBeInTheDocument()
    expect(screen.getByText(/Develop Pokemon Deck Website/)).toBeInTheDocument()
  })

  test('renders article links', () => {
    render(<Articles />)
    const links = screen.getAllByText('Read article')
    expect(links).toHaveLength(3)
  })
})